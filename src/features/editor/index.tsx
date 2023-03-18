import { useEffect, useMemo, useState } from 'react';
import '@blocknote/core/style.css';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/hooks';

import EditorHeader from './header';
import EditorSidebar from './sidebar';
import { createBlocks, toPartialBlockFormat } from '@helpers/notion.extensions';
import { updateDocumentBlock, updateEditorContent } from '@store/notion';
import { Block } from '@react-types/notion';

let timmer: any | null = null;

export default function Editor() {
  const theme = useTheme();
  const { children, document, loading } = useAppSelector(
    ({ notion }) => notion
  );

  const dispatch = useAppDispatch();

  const editor = useBlockNote({
    onEditorContentChange(santaClaus) {
      timmer && clearTimeout(timmer);
      
      timmer = setTimeout(() => {
        const currentPosition = santaClaus.getTextCursorPosition();
        
        const blockToUpdate = createBlocks(currentPosition.block)
        if(blockToUpdate === null) return          
        dispatch(updateEditorContent(blockToUpdate))

        dispatch(updateDocumentBlock({ pageId: 'cb529ee57a4f40a9bc5aeb360c23fd5c', children: blockToUpdate }));
      }, 1000);
    }
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
