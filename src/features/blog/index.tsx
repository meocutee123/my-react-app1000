import React from 'react';
import { api } from '@lib/axios';
import { StyledContainer } from './index.styled';
import { useLoaderData } from 'react-router-dom';
import FeedComponent from '@components/ui/feed';

export const loadFeeds = async () => {
  const feeds = await api.get<Array<Feed>>('posts');
  return feeds;
};

export default function Blog() {
  const feeds = useLoaderData() as Array<Feed>;

  return (
    <StyledContainer>
      {feeds.map((feed) => (
        <FeedComponent key={feed.id} feed={feed} />
      ))}
    </StyledContainer>
  );
}
