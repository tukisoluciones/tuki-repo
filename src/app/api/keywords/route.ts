import { NextResponse } from "next/server";

const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN;
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD;

export async function POST(req: Request) {
  const { keyword, location } = await req.json();

  if (!keyword || !location) {
    return NextResponse.json({ error: "keyword and location required" }, { status: 400 });
  }

  if (DATAFORSEO_LOGIN && DATAFORSEO_PASSWORD) {
    try {
      const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString("base64");
      const res = await fetch("https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live", {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            keywords: [keyword],
            location_name: location,
            language_name: "Spanish",
          },
        ]),
      });

      const data = await res.json();
      const result = data?.tasks?.[0]?.result?.[0];

      if (result) {
        return NextResponse.json({
          source: "google_ads",
          keyword: result.keyword,
          volume: result.search_volume ?? 0,
          competition: result.competition ?? "UNKNOWN",
          cpc: result.cpc ?? 0,
        });
      }
    } catch {
      // Fall through to estimates
    }
  }

  // Fallback: return estimate flag so frontend uses industry data
  return NextResponse.json({
    source: "estimate",
    keyword,
    volume: null,
  });
}
