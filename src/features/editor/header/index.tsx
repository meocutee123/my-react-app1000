import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {
  Box,
  Button,
  IconButton,
  Popover,
  styled,
  TextField,
  TextFieldProps,
  Tooltip,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { updateDocumentTitle } from '@store/notion';

const StyledEditorHeader = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(1)};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
);

export default function EditorHeader() {
  const documentTitle = useRef(null);
  const [open, setOpen] = useState(false);
  const { document } = useAppSelector(({ notion }) => notion);
  const textField = useRef<TextFieldProps>(null);
  const dispatch = useAppDispatch();
  const rename = (document: any | null) => {
    if (document === null) return;
    setOpen(true);
    //TODO rename
  };

  const handleCloseAction = () => {
    if (textField.current === null) return;

    dispatch(
      updateDocumentTitle({
        documentId: document.id,
        title: textField.current.value as string,
      })
    );
    setOpen(false);
  };

  return (
    <StyledEditorHeader>
      <Box>
        <Button
          ref={documentTitle}
          onClick={() => rename(document)}
          variant='text'
          size='small'
        >
          {document
            ? document.properties.title.title[0].plain_text
            : 'Getting started'}
        </Button>
        <Popover
          open={open}
          disableScrollLock={true}
          onClose={() => handleCloseAction()}
          anchorEl={documentTitle.current}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Box p={2}>
            <TextField
              id='standard-basic'
              label='Standard'
              variant='standard'
              inputRef={textField}
              defaultValue={document ? document.properties.title.title[0].plain_text : ''}
            />
          </Box>
        </Popover>
      </Box>

      <Box display='flex' alignItems='center'>
        <Tooltip title='Edited by meocuteequas'>
          <span>
            <Button variant='text' disabled>
              Edited 2 hours ago!
            </Button>
          </span>
        </Tooltip>
        <Tooltip title='Share or publish to the web'>
          <Button variant='text' size='small'>
            Share
          </Button>
        </Tooltip>
        <Box>
          <Tooltip title='View all updates'>
            <IconButton>
              <AccessTimeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Pin this page to your sidebar'>
            <IconButton>
              <StarBorderPurple500OutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Style, export and more...'>
            <IconButton>
              <MoreHorizOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </StyledEditorHeader>
  );
}
