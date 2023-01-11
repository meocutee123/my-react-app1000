import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Container } from '@mui/material';
import Footer from '@components/ui/footer';
import Overview from './components/overview';
import Activity from './components/activity';
import Feed from './components/feed';
import Tag from './components/tag';
import Card from './components/card';
import Addresses from './components/addresses';
export default function Profile() {
  const user: IUser = {
    savedCards: 7,
    name: 'Catherine Pike',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: 'Web Developer',
    location: 'Barcelona, Spain',
    followers: 465,
  };
  return (
    <>
      <Helmet>
        <title>React - Profile</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth='lg'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <Overview user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Activity />
          </Grid>
          <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <Tag />
          </Grid>
          <Grid item xs={12} md={7}>
            <Card />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
