import React, { useRef, useState } from 'react';
import { StyledBadge } from './index.styled';
import { formatDistance, subDays } from 'date-fns';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Popover,
  Tooltip,
  Typography,
} from '@mui/material';

export default function Notification() {
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
      <Tooltip arrow title='Notifications'>
        <IconButton color='primary' ref={ref} onClick={handleOpen}>
          <StyledBadge
            badgeContent={10}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <NotificationsActiveTwoToneIcon />
          </StyledBadge>
        </IconButton>
      </Tooltip>

      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          sx={{ p: 2 }}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography variant='h5'>Notifications</Typography>
        </Box>
        <Divider />
        <List sx={{ p: 0 }}>
          <ListItem
            sx={{ p: 2, minWidth: 350, display: { xs: 'block', sm: 'flex' } }}
          >
            <Box flex='1'>
              <Box display='flex' justifyContent='space-between'>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Messaging Platform
                </Typography>
                <Typography variant='caption' sx={{ textTransform: 'none' }}>
                  {formatDistance(subDays(new Date(), 3), new Date(), {
                    addSuffix: true,
                  })}
                </Typography>
              </Box>
              <Typography
                component='span'
                variant='body2'
                color='text.secondary'
              >
                {' '}
                new messages in your inbox
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Popover>
    </>
  );
}
