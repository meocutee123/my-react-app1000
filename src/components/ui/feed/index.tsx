import img from '@assets/images/a-street-in-havana-cubae2699b-1024x683.jpg';
import { StyledContainer } from './index.styled';

import React from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
type PROPS = {
  feed: Feed;
};

export default function FeedComponent({ feed }: PROPS) {
  return (
    <StyledContainer>
      <Card sx={{ maxWidth: 390, padding: '10px' }}>
        <CardHeader
          sx={{ padding: '4px 10px', marginBottom: '10px' }}
          avatar={<Avatar src={feed.author.avatar} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={feed.author.name}
          subheader=''
        />
        <CardMedia
          sx={{ borderRadius: '8px' }}
          component='img'
          height='474'
          image={feed.banner}
          alt={feed.slug}
        />
        <CardContent sx={{ padding: '14px 10px', fontSize: 16 }}>
          <Typography variant='overline'>
            {new Date(feed.created).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Typography>
          <Typography variant='subtitle2'>{feed.introduction}</Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ fontWeight: 'bold' }} variant='text'>
            View Post
          </Button>
        </CardActions>
      </Card>
    </StyledContainer>
  );
}
