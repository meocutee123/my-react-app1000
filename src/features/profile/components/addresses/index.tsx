import React from 'react';
import { ArrowForwardTwoTone } from '@mui/icons-material';
import { Box, Button, Card, CardHeader, Divider, Grid, Typography } from '@mui/material';

export default function Addresses() {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='stretch'
      spacing={3}
    >
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Delivery Addresses' subheader='12 sub addresses' />
          <Divider />

          <Box p={2}>
            <Typography variant="caption" fontWeight="bold">
              Favourite
            </Typography>
            <Box sx={{ minHeight: { xs: 0, md: 242 } }} p={2}>
              <Typography variant="h5">Kadin Westervelt</Typography>
              <Typography variant="h5" sx={{ py: 1 }} fontWeight="normal">
                714-650-6297
              </Typography>
              <Typography variant="subtitle1">
                348 W. Goldfield Street Bethel Park, PA 15102
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              endIcon={<ArrowForwardTwoTone />}
            >
              Manage
            </Button>
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Shipping Addresses' subheader='8 sub addresses' />
          <Divider />

          <Box p={2}>
            <Typography variant="caption" fontWeight="bold">
              Favourite
            </Typography>
            <Box sx={{ minHeight: { xs: 0, md: 242 } }} p={2}>
              <Typography variant="h5">Kadin Westervelt</Typography>
              <Typography variant="h5" sx={{ py: 1 }} fontWeight="normal">
                714-650-6297
              </Typography>
              <Typography variant="subtitle1">
                348 W. Goldfield Street Bethel Park, PA 15102
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              endIcon={<ArrowForwardTwoTone />}
            >
              Manage
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
