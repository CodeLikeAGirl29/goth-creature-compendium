// app/api/creatures/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q") || "gothic animal";
  const vibe = (searchParams.get("vibe") || "all").toLowerCase();

  // If a specific vibe is selected, we include it in the search term
  const finalQuery =
    vibe !== "all"
      ? `${query} ${vibe} gothic`
      : `${query} gothic`;

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      finalQuery
    )}&orientation=portrait&per_page=24`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      // Helpful in dev to avoid caching weirdness
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }

  const data = await res.json();

  const effectiveVibe = vibe === "all" ? "mysterious" : vibe;

  const creatures = data.results.map((item: any) => ({
    id: item.id,
    name: item.alt_description || item.description || "Unknown Creature",
    imageUrl: item.urls.small,
    author: item.user.name,
    authorLink: item.user.links.html,
    // everything in this batch shares the same vibe
    vibe: effectiveVibe,
  }));

  return NextResponse.json({ creatures });
}
