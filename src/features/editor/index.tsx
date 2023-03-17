import { useEffect, useState } from 'react';
import '@blocknote/core/style.css';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { loadDocumentChildren, loadDocuments } from '@store/notion';

import EditorHeader from './header';
import EditorSidebar from './sidebar';
import { toPartialBlockFormat } from '@helpers/notion.extensions';

export default function Editor() {
  const theme = useTheme();
  const { children, document, loading } = useAppSelector(
    ({ notion }) => notion
  );

  const editor = useBlockNote({
    onEditorReady(santaClaus) {
      if (document === null) return;

      // santaClaus.insertBlocks(
      //   [
      //     {
      //       type: 'heading',
      //       props: {
      //         level: '1',
      //       },
      //       content: "Hello there",
      //     },
      //   ],
      //   santaClaus.topLevelBlocks[santaClaus.topLevelBlocks.length - 1].id
      // );
    },
  });

  useEffect(() => {
    if (document === null || children === null) return;
    if (editor === null) return;
    editor.removeBlocks(editor.topLevelBlocks);

    const title = {
      type: 'heading',
      props: { level: '2' },
      content: document.properties.title.title[0].plain_text,
    };

    const topBlocks = editor.topLevelBlocks;
    const blocks = toPartialBlockFormat(children);
    editor.insertBlocks([title, ...blocks], topBlocks[topBlocks.length - 1].id);
  }, [document, children, editor]);

  return (
    <>
      <EditorSidebar />

      <Box sx={{ ml: `${theme.sidebar.width}`, pl: 2 }}>
        <EditorHeader />

        <Container
          maxWidth='md'
          sx={{ paddingTop: '200px', position: 'relative' }}
        >
          {loading === 'pending' && (
            <Typography sx={{ textAlign: 'center' }} variant='h1'>
              Loading...
            </Typography>
          )}
          {loading === 'idle' && <BlockNoteView editor={editor} />}
        </Container>
      </Box>
    </>
  );
}
