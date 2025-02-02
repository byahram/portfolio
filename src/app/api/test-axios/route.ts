import notionAxios from "@/lib/axios";
import { NextResponse } from "next/server";

const NOTION_CAREER_DB_ID = process.env.NOTION_CAREER_DB_ID as string;
if (!NOTION_CAREER_DB_ID) {
  throw new Error("Missing NOTION_CAREER_DB_ID in environment variables.");
}

export async function GET() {
  try {
    // notionAxios
    const response = await notionAxios.post(
      `/databases/${NOTION_CAREER_DB_ID}/query`,
      {}
    );
    // console.log("[notionAxios] response.data.results = ", response.data.results);
    return NextResponse.json(response.data.results);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred while fetching data.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
