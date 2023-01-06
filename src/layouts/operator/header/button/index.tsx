import { Box } from '@mui/material';
import React from 'react';
import Notification from './notification'
import Search from './search';
export default function Button() {
  return (
    <Box sx={{ mr: 1 }}>
      <Search />
      <Box sx={{ mx: 0.5 }} component='span'>
        <Notification />
      </Box>
    </Box>
  );
}
