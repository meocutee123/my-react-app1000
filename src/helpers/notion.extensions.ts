import { toCamelCase } from "./string.extensions";

export function toPartialBlockFormat(c: any) {
  const pb = c.results.map((b: any) => {
    const rt = b[b.type].rich_text[0];
    if (!rt) return null;

    let bt = toCamelCase(b.type)
    if (bt === 'bulletedListItem') bt = 'bulletListItem';

    return { type: bt, content: rt ? rt.text.content : null, };
  })

  return pb.filter((x: any) => x !== null);
}