import { Box, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './header';
import { StyledContainer } from './index.styled';


export default function () {
  return (
    <StyledContainer>
      <Header />
      <Box>
        <Box display='block'>
          <Outlet />
        </Box>
      </Box>
    </StyledContainer>
  );

}
