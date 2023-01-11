import { useCallback, useEffect } from 'react';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import { getComments, loadPosts } from '@store/blog';
import { useAppDispatch, useAppSelector } from '@store/hook';

export default function Pokemon() {
  const state = useAppSelector(({ blog }) => blog.loading);
  const posts = useAppSelector(({ blog }) => blog.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state === 'idle') load();
  });

  const load = useCallback(() => dispatch(loadPosts()), [dispatch]);

  return (
    <>
      <Container maxWidth='lg'>
        <Typography variant='h1'>{state}</Typography>
        <Box pt={3}>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid key={post.id} item md={12}>
                <Card>
                  <CardHeader title={post.title} subheader='1/10/2023' />

                  <CardContent>
                    <Typography variant='body1'>{post.body}</Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                      variant='outlined'
                      onClick={() => dispatch(getComments(post.id))}
                    >
                      View comment
                    </Button>
                  </CardActions>

                  <List>
                    {post.comments?.map((comment: any) => (
                      <ListItem key={comment.id}>
                        <ListItemText>
                          {comment.email} - {comment.body}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
