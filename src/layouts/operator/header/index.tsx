import { NavigationContext } from '@context/navigation';
import {
  alpha,
  Box,
  Divider,
  IconButton,
  lighten,
  Stack,
  Tooltip,
  useTheme,
} from '@mui/material';
import { useContext } from 'react';
import { StyledContainer } from './index.styled';

import Menu from './menu';
import Profile from './profile';

import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import Language from './language';

const locale = localStorage.getItem('i18nextLng') || 'en';

export default function Header() {
  const theme = useTheme();
  const { visibility, toggle } = useContext(NavigationContext);

  return (
    <StyledContainer
      display='flex'
      alignItems='center'
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`,
      }}
    >
      <Stack
        direction='row'
        divider={<Divider orientation='vertical' flexItem />}
        alignItems='center'
        spacing={2}
      >
        <Menu />
      </Stack>

      <Box display='flex' alignItems='center'>
        <Language />
        <Profile />
        <Box
          component='span'
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' },
          }}
        >
          <Tooltip arrow title='Toggle Menu'>
            <IconButton color='primary' onClick={toggle}>
              {visibility === 'close' ? (
                <MenuTwoToneIcon fontSize='small' />
              ) : (
                <CloseTwoToneIcon fontSize='small' />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </StyledContainer>
  );
}
