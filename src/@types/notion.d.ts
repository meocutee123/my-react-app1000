export type NotionDocument = {
  id: string,
  title: string
}

export type CreateParameters = {
  parentId: string,
  title: string,
  link?: string,
  annotations?: {
    bold?: boolean,
    italic?: boolean,
    strikethrough?: boolean,
    underline?: boolean,
    code?: boolean,
    color?: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red";
  }
}

export type UpdateDocumentTitleParameters = {
  documentId: string,
  title: string
}

export type UpdateDocumentBlocksParameters = {
  pageId: string,
  children: Block
}

type Block = {
  id: string,
  type: "paragraph"
  paragraph: BlockContent
}

type BlockContent = {
  rich_text: [
    {
      type: 'text',
      text: { content: string }
    }
  ]
}