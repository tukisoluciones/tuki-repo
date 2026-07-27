export function stringifyJsonLd(data: object): string {
  // Escape < to prevent </script> injection breakout in embedded JSON blobs
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
