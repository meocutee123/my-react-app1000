import React, { ChangeEvent, useRef } from 'react';
import { StyledContainer } from './index.styled';


import File from '@components/ui/file';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box, IconButton, Link, Typography } from '@mui/material';

export default function Uploader() {
  const file = useRef<HTMLInputElement | null>(null);

  const openUploader = () => {
    const input = file.current as HTMLInputElement;
    input !== null && input.click();
  };

  const upload = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target
    if(element === null) return

    const files = element.files
    if(files === null) return

    const target = files[0]

    console.log(target)

  }

  return (
    <StyledContainer>
      <Box className='box'>
        <Box>
          <IconButton color='primary'>
            <UploadFileIcon />
          </IconButton>
        </Box>
        <input hidden accept='image/*' type='file' ref={file} onChange={(event) => upload(event)}/>
        <Typography
          variant='subtitle2'
          sx={{ fontWeight: 'bold', marginBottom: '4px' }}
        >
          <Link
            sx={{ fontSize: '14px', fontWeight: 'inherit' }}
            component='button'
            onClick={() => openUploader()}
          >
            Click to upload
          </Link>{' '}
          or drag and drop
        </Typography>

        <Typography variant='body2' sx={{ color: '#00000099' }}>
          SVG, PNG, JPG or GIF (max. 3MB)
        </Typography>
      </Box>

      <File />
    </StyledContainer>
  );
}
