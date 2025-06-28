import { queryNotionDatabase } from "@/lib/notionQuery";
import { NextRequest, NextResponse } from "next/server";

const DB_IDS: Record<string, string | undefined> = {
  routing: process.env.NOTION_ROUTING_DB_ID,
  profile: process.env.NOTION_PROFILE_DB_ID,
  gallery: process.env.NOTION_GALLERY_DB_ID,
  education: process.env.NOTION_EDUCATION_DB_ID,
  skills: process.env.NOTION_SKILLS_DB_ID,
  certification: process.env.NOTION_CERTIFICATION_DB_ID,
  career: process.env.NOTION_CAREER_DB_ID,
  projects: process.env.NOTION_PROJECTS_DB_ID,
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (!type || !DB_IDS[type]) {
    return NextResponse.json(
      { error: "Invalid or missing 'type' parameter" },
      { status: 400 }
    );
  }

  try {
    const results = await queryNotionDatabase(DB_IDS[type]!);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
