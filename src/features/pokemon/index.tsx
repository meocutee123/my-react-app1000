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

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { getComments, loadPosts } from '@store/blog/actions';

export default function Pokemon() {
  const { loading, error, posts } = useAppSelector(({ blog }) => blog);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth='lg'>
        <Typography variant='h1'>{loading}</Typography>
        {error && <Typography variant='h1'>{error}</Typography>}
        <Box pt={3}>
          <Grid container spacing={3}>
            {/* {posts.map((post) => (
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
            ))} */}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
