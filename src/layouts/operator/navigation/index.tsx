import Logo from '@components/ui/logo';
import Scrollbar from '@components/ui/scrollbar';
import { NavigationContext } from '@context/navigation';
import {
  useTheme,
  alpha,
  lighten,
  darken,
  Box,
  Divider,
  Drawer,
} from '@mui/material';
import React, { useContext } from 'react';
import { StyledNavigation } from './index.styled';
import Menu from './menu';

export default function Navigation() {
  const { visibility, toggle } = useContext(NavigationContext);
  const theme = useTheme();

  return (
    <StyledNavigation
      sx={{
        display: {
          xs: 'none',
          lg: 'inline-block',
        },
        position: 'fixed',
        left: 0,
        top: 0,
        background:
          theme.palette.mode === 'dark'
            ? alpha(
                lighten(
                  theme.header.background ? theme.header.background : 'unset',
                  0.1
                ),
                0.5
              )
            : darken(theme.colors.alpha.black[100], 0.5),
        boxShadow:
          theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none',
      }}
    >
      <Scrollbar>
        <Box mt={3}>
          <Box
            mx={2}
            sx={{
              width: 52,
            }}
          >
            <Logo />
          </Box>
        </Box>
        <Divider
          sx={{
            mt: theme.spacing(3),
            mx: theme.spacing(2),
            background: theme.colors.alpha.trueWhite[10],
          }}
        />
        <Menu />
      </Scrollbar>

      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={visibility === 'open'}
        onClose={toggle}
        variant='temporary'
        elevation={9}
      >
        <StyledNavigation
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[100]
                : darken(theme.colors.alpha.black[100], 0.5),
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52,
                }}
              >
                <Logo />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10],
              }}
            />
            <Menu />
          </Scrollbar>
        </StyledNavigation>
      </Drawer>
    </StyledNavigation>
  );
}
