import { Block } from "@react-types/notion";
import { toCamelCase } from "./string.extensions";

export function toPartialBlockFormat(c: any) {
  const pb = c.results.map((b: any) => {
    const rt = b[b.type].rich_text[0];
    if (!rt) return null;

    let bt = toCamelCase(b.type)
    if (bt === 'bulletedListItem') bt = 'bulletListItem';

    return { id: b.id, type: bt, content: rt ? rt.text.content : null, };
  })

  return pb.filter((x: any) => x !== null);
}

export function createBlocks(block: any): Block | null {

  if (block.content[0] && 'text' in block.content[0]) {
    return {
      id: block.id,
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: { content: block.content[0].text },
          },
        ],
      },
    };
  }

  return null;

}