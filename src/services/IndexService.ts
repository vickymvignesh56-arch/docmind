import { qdrantClient } from "../config/qdrant.js";
import { qdrantServices, QdrantServices } from "./QdrantService.js";
import { EmbeddingService, embeddingService } from "./EmbeddingService.js";
import { chunkText } from "../utils/text-chunker.js";
import crypto from "crypto";
export class IndexService {
  constructor(
    private readonly qdrantServices: QdrantServices,
    private readonly embeddingService: EmbeddingService,
  ) {}
  async ingestPoint(
    userId: string,
    channelId: string,
    resourceId: string,
    fileName: string,
    filePath: string,
    text: string,
  ): Promise<void> {
    const collectionName = this.qdrantServices.getUserCollectionName(userId);
    const chunks = chunkText(text, 500, 50);
    try {
      for (const chunk of chunks) {
        const embedding = await this.embeddingService.generateEmbedding(
          userId,
          chunk.text,
        );
        const hash = crypto
          .createHash("sha256")
          .update(`${resourceId}-${chunk.index}`)
          .digest("hex");

        const pointId = [
          hash.slice(0, 8),
          hash.slice(8, 12),
          hash.slice(12, 16),
          hash.slice(16, 20),
          hash.slice(20, 32),
        ].join("-");
        const result = await qdrantClient.upsert(collectionName, {
          wait: true,
          points: [
            {
              id: pointId,
              vector: embedding,
              payload: {
                userId,
                chunkIndex: chunk.index,
                text: chunk.text,
                channelId,
                resourceId,
                fileName,
                filePath,
              },
            },
          ],
        });
        console.log("✅ QDRANT UPSERT SUCCESS");
        console.log("QDRANT RESULT:", result);
      }
    } catch (error) {
      console.error("Failed to ingest resource:", error);
      throw error;
    }
  }

  async clearIndexPointsResource(userId: string, resourceId: string) {
    const collectionName = this.qdrantServices.getUserCollectionName(userId);
    await qdrantClient.delete(collectionName, {
      wait: true,
      filter: {
        must: [
          {
            key: "resourceId",
            match: {
              value: resourceId,
            },
          },
        ],
      },
    });
  }

  async searchResource(
    userId: string,
    resourceId: string[],
    queryEmbedding: number[],
    limit: number = 5,
  ) {
    const collectionName = this.qdrantServices.getUserCollectionName(userId);
    const result = await qdrantClient.search(collectionName, {
      vector: queryEmbedding,
      limit,
      with_payload: true,
      filter: {
        must: [
          {
            key: "resourceId",
            match: {
              any: resourceId,
            },
          },
        ],
      },
    });
    return result;
  }
}

export const indexService = new IndexService(qdrantServices, embeddingService);
