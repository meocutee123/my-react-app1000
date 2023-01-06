import React, { useEffect, useState } from 'react';
import { Box, IconButton, LinearProgress, Typography } from '@mui/material';
import Close from '@mui/icons-material/Close';
import FolderIcon from '@mui/icons-material/Folder';
export default function File() {
  const [progress, setProgress] = useState<number>(0);
  const cancel = () => {};

  useEffect(() => {}, []);
  return (
    <Box
      sx={{
        maxWidth: '600px',
        padding: '10px 24px 10px 10px',
        borderRadius: '4px',
        marginBottom: '16px',
        boxShadow:
          ' 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start' }}>
        <Box sx={{ marginRight: '16px' }}>
          <FolderIcon
            color='primary'
            sx={{
              width: '60px',
              height: '60px',
              transform: ' translateY(-6px)',
            }}
          />
        </Box>
        <Box sx={{ width: '100%', position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: '25%', right: 0, transform: 'translateY(-50%)', cursor: 'pointer' }}>
      
              <Close onClick={() => cancel()}/>
          </Box>
          <Typography
            variant='body1'
            sx={{ fontWeight: 'bold', marginBottom: '8px' }}
          >
            photo.pdf
          </Typography>

          <LinearProgress
            variant='determinate'
            value={20}
            sx={{ borderRadius: 5, marginBottom: '8px' }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='body2' sx={{ color: '#00000099' }}>
              37% done
            </Typography>
            <Typography variant='body2' sx={{ color: '#00000099' }}>
              190KB/sec
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
