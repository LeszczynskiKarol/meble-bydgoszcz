// Pobiera opinie i ocenę zbiorczą wizytówki Meble System z Places API (New)
// i zapisuje do src/data/google-reviews.json, z którego czyta GoogleReviewsSection.astro.
//
//   node scripts/fetch-google-reviews.mjs
//
// Wymaga zmiennej środowiskowej GOOGLE_PLACES_API_KEY (klucz ograniczony do
// places.googleapis.com). Nie wpisuj klucza do repo.
//
// PLACE_ID jest jedynym polem Places API, które wolno przechowywać bezterminowo —
// dlatego siedzi na stałe w kodzie. Reszta (opinie, rating, userRatingCount) podlega
// zakazowi cache'owania, więc ten plik trzeba odświeżać, a nie traktować jak stałą.
// Szczegóły i zgodna alternatywa: patrz komentarz w GoogleReviewsSection.astro.

const PLACE_ID = "ChIJFcfLk-s1A0cRg5OfN4oSskU"; // Meble System - meble na wymiar Toruń (opinie wspólne dla marki meble-bydgoszcz)
const OUT = new URL("../src/data/google-reviews.json", import.meta.url);

const FIELD_MASK = [
  "id",
  "displayName",
  "formattedAddress",
  "nationalPhoneNumber",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "regularOpeningHours.weekdayDescriptions",
  "reviews",
].join(",");

const key = process.env.GOOGLE_PLACES_API_KEY;
if (!key) {
  console.error("Brak GOOGLE_PLACES_API_KEY w środowisku.");
  process.exit(1);
}

const res = await fetch(
  `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=pl`,
  { headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": FIELD_MASK } },
);

if (!res.ok) {
  console.error(`Places API ${res.status}: ${await res.text()}`);
  process.exit(1);
}

const place = await res.json();

// Google wymaga przy publikacji opinii: nazwy autora, jego zdjęcia i linku do profilu,
// daty publikacji oraz linku do oryginalnej opinii w Mapach. Zapisujemy komplet.
const payload = {
  fetchedAt: new Date().toISOString(),
  placeId: place.id,
  name: place.displayName?.text ?? null,
  address: place.formattedAddress ?? null,
  phone: place.nationalPhoneNumber ?? null,
  googleMapsUri: place.googleMapsUri ?? null,
  openingHours: place.regularOpeningHours?.weekdayDescriptions ?? [],
  rating: place.rating ?? null,
  userRatingCount: place.userRatingCount ?? null,
  reviews: (place.reviews ?? []).map((r) => ({
    id: r.name,
    author: r.authorAttribution?.displayName ?? "Klient Google",
    authorUri: r.authorAttribution?.uri ?? null,
    authorPhoto: r.authorAttribution?.photoUri ?? null,
    rating: r.rating ?? null,
    text: (r.originalText ?? r.text)?.text ?? "",
    publishTime: r.publishTime ?? null,
    relativeTime: r.relativePublishTimeDescription ?? null,
    googleMapsUri: r.googleMapsUri ?? null,
  })),
};

const { writeFile } = await import("node:fs/promises");
await writeFile(OUT, JSON.stringify(payload, null, 2) + "\n", "utf8");

console.log(
  `Zapisano ${payload.reviews.length} opinii (ocena ${payload.rating} / ${payload.userRatingCount}) do src/data/google-reviews.json`,
);
