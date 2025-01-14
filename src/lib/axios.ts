import axios from "axios";

const NOTION_API_URL = process.env.NOTION_API_URL;
const NOTION_API_VERSION = process.env.NOTION_API_VERSION;
const NOTION_API_SECRET_KEY = process.env.NOTION_API_SECRET_KEY;

const notionAxios = axios.create({
  baseURL: NOTION_API_URL,
  headers: {
    Authorization: `Bearer ${NOTION_API_SECRET_KEY}`,
    "Notion-Version": NOTION_API_VERSION,
    "Content-Type": "application/json",
  },
});

export default notionAxios;
