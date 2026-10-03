import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const image = await readFile(
    path.join(process.cwd(), "public/content/social-preview.png"),
  );
  return new Response(image, {
    headers: { "Content-Type": "image/png" },
  });
}
