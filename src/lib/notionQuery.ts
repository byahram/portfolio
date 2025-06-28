import notionClient from "@/lib/notionhq";

export async function queryNotionDatabase(databaseId: string) {
  if (!databaseId) {
    throw new Error("Missing Notion Database ID");
  }

  try {
    const response = await notionClient.databases.query({
      database_id: databaseId,
    });
    return response.results;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred while querying Notion.";
    throw new Error(message);
  }
}
