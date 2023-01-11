import React, { useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Popover,
} from '@mui/material';
import {
  StyledButton,
  StyledDescription,
  StyledExtendBox,
  StyledLabel,
  StyledTextContainer,
} from './index.styled';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';

import { NavLink } from 'react-router-dom';

export default function Profile() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg',
    jobtitle: 'Project Manager',
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
      <StyledButton color='secondary' ref={ref} onClick={handleOpen}>
        <Avatar variant='rounded' alt={user.name} src={user.avatar} />
        <StyledTextContainer>
          <StyledLabel variant='body1'>{user.name}</StyledLabel>
          <StyledDescription variant='body2'>{user.jobtitle}</StyledDescription>
        </StyledTextContainer>
        <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
      </StyledButton>
      
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
        <StyledExtendBox sx={{ minWidth: 210 }} display='flex'>
          <Avatar variant='rounded' alt={user.name} src={user.avatar} />
          <StyledTextContainer>
            <StyledLabel variant='body1'>{user.name}</StyledLabel>
            <StyledDescription variant='body2'>
              {user.jobtitle}
            </StyledDescription>
          </StyledTextContainer>
        </StyledExtendBox>
        <Divider sx={{ mb: 0 }} />
        <List sx={{ p: 1 }} component='nav'>
          <ListItem button to='/management/profile/details' component={NavLink}>
            <AccountBoxTwoToneIcon fontSize='small' />
            <ListItemText primary='My Profile' />
          </ListItem>
          <ListItem button to='/dashboards/messenger' component={NavLink}>
            <InboxTwoToneIcon fontSize='small' />
            <ListItemText primary='Messenger' />
          </ListItem>
          <ListItem
            button
            to='/management/profile/settings'
            component={NavLink}
          >
            <AccountTreeTwoToneIcon fontSize='small' />
            <ListItemText primary='Account Settings' />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button color='primary' fullWidth>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Sign out
          </Button>
        </Box>
      </Popover>
    </>
  );
}
