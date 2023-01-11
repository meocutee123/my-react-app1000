import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './header';
import { StyledContainer } from './index.styled';
import Navigation from './navigation';

export default function Operator () {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Header />
      <Navigation />
      <Box
        sx={{
          position: 'relative',
          zIndex: 5,
          display: 'block',
          flex: 1,
          pt: `${theme.header.height}`,
          [theme.breakpoints.up('lg')]: {
            ml: `${theme.sidebar.width}`,
          },
        }}
      >
        <Box display='block'>
          <Outlet />
        </Box>
      </Box>
    </StyledContainer>
  );
}
