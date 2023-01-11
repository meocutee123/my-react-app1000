import React, { useRef, useState } from 'react';
import {
  lighten,
  IconButton,
  styled,
  Tooltip,
  Popover,
  List,
  ListItemButton,
  ListItem,
  ListSubheader,
  Typography,
} from '@mui/material';
import i18n from '@lib/i18n';

const StyledFlag = styled(IconButton)(
  ({ theme }) => `
  background-color: ${lighten(theme.colors.error.lighter, 0.8)};
  margin-right: ${theme.spacing(2)};
  &:hover {
    background-color: ${lighten(theme.colors.error.lighter, 0.2)};
  }
  img {
    width: 20px;
    height: 20px;
  }
  `
);
export default function Language() {
  const source = [
    {
      code: 'vi',
      flag: 'static/images/flags/viet-nam.svg',
      language: 'Vietnamese',
    },
    {
      code: 'en',
      flag: 'static/images/flags/united-states.svg',
      language: 'English',
    }
  ]

  const [country, setCountry] = useState(source[0]);

  const switchLanguage = (code: string) => {
    i18n.changeLanguage(code);
    const countryByCode = source.find(x => x.code === code) || source[0]
    setCountry(countryByCode)
    setOpen(false);
  };

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title='Language Switcher'>
        <StyledFlag ref={ref} onClick={handleOpen}>
          <img src={country.flag} alt={country.language} />
        </StyledFlag>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List disablePadding>
          <ListSubheader>
            <Typography variant='h6' mb={1}>
              Language Switcher
            </Typography>
          </ListSubheader>
          <ListItem>
            <ListItemButton onClick={() => switchLanguage('vi')}>
              <img src='static/images/flags/viet-nam.svg' alt='' width='20' height='20' />
              <Typography variant='h6' ml={2}>
                Vietnamese
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => switchLanguage('en')}>
              <img
                src='static/images/flags/united-states.svg'
                alt=''
                width='20'
                height='20'
              />
              <Typography variant='h6' ml={2}>
                United States
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  );
}
