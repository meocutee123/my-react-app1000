import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  styled,
  Typography,
  useTheme,
} from '@mui/material';

const StyledList = styled(List)(
  () => `
    .MuiListItem-root {
      border-radius: 0;
      margin: 0;
    }
  `
);

export default function Tag() {
  const theme = useTheme();
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title='Popular Tags' />
      <Divider />
      <StyledList disablePadding>
        <ListItem
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` },
          }}
          button
        >
          <ListItemText>#HTML</ListItemText>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` },
          }}
          button
        >
          <ListItemText> #software_development</ListItemText>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` },
          }}
          button
        >
          <ListItemText> #TraningInfluencers</ListItemText>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` },
          }}
          button
        >
          <ListItemText> #investorsWatch2023</ListItemText>
        </ListItem>
        <Divider />

        <ListSubheader>
          <Typography sx={{ py: 1.5 }} variant='h4' color='text.primary'>
            Groups
          </Typography>
        </ListSubheader>
      </StyledList>
      <Divider />
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            sx={{
              width: 38,
              height: 38,
              background: `${theme.colors.info.main}`,
              color: `${theme.palette.info.contrastText}`,
            }}
          >
            WD
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{
            variant: 'h5',
            color: `${theme.colors.alpha.black[100]}`,
          }}
          primary='Web Designers Lounge'
        />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            sx={{
              width: 38,
              height: 38,
              background: `${theme.colors.alpha.black[100]}`,
              color: `${theme.colors.alpha.white[100]}`,
            }}
          >
            D
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{
            variant: 'h5',
            color: `${theme.colors.alpha.black[100]}`,
          }}
          primary='Writer’s Digest Daily'
        />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            sx={{ width: 38, height: 38 }}
            src='/static/images/logo/google.svg'
          />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{
            variant: 'h5',
            color: `${theme.colors.alpha.black[100]}`,
          }}
          primary='Google Developers'
        />
      </ListItem>
    </Card>
  );
}
