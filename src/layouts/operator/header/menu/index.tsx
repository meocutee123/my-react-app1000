import { NavLink } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import { StyledContainer } from './index.styled';

import { Box, List, ListItem, ListItemButton, ListItemText, Menu as MuiMenu, MenuItem } from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

export default function Menu() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <StyledContainer
      sx={{
        display: {
          xs: 'none',
          md: 'block',
        },
      }}
    >
      <List>
        <ListItem disablePadding component={Box} display='flex'>
        <ListItemButton
            classes={{ root: 'MuiListItem-indicators' }}
            component={NavLink}
            to="/components/buttons"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Buttons"
            />
          </ListItemButton>
          <ListItemButton
            classes={{ root: 'MuiListItem-indicators' }}
            component={NavLink}
            to="/components/forms"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Forms"
            />
          </ListItemButton>
          <ListItemButton
            classes={{ root: 'MuiListItem-indicators' }}
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  Others
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <MuiMenu anchorEl={ref.current} onClose={handleClose} open={isOpen} disableScrollLock={true}>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/overview">
          Overview
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/tabs">
          Tabs
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/cards">
          Cards
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/modals">
          Modals
        </MenuItem>
      </MuiMenu>
    </StyledContainer>
  );
}
