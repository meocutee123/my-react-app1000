import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
const StyledActivityIllustration = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
`
);

export default function Activity() {
  const theme = useTheme();
  return (
    <Card>
      <CardHeader title='Recent activity' />
      <Divider />
      <Box px={2} py={4} display='flex' alignItems='flex-start'>
        <StyledActivityIllustration>
          <ShoppingBagTwoToneIcon />
        </StyledActivityIllustration>

        <Box pl={2} flex={1}>
          <Typography variant='h3'>Orders</Typography>
          <Box pt={2} display='flex'>
            <Box pr={8}>
              <Typography
                gutterBottom
                variant='caption'
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                Total
              </Typography>
              <Typography variant='h2'>485</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant='caption'
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                Failed
              </Typography>
              <Typography variant='h2'>8</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider />
      <Box px={2} py={4} display='flex' alignItems='flex-start'>
        <StyledActivityIllustration>
          <FavoriteTwoToneIcon />
        </StyledActivityIllustration>

        <Box pl={2} flex={1}>
          <Typography variant='h3'>Favourites</Typography>
          <Box pt={2} display='flex'>
            <Box pr={8}>
              <Typography
                gutterBottom
                variant='caption'
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                Products
              </Typography>
              <Typography variant='h2'>64</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant='caption'
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                List
              </Typography>
              <Typography variant='h2'>15</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider />
      <Box px={2} py={4} display='flex' alignItems='flex-start'>
        <StyledActivityIllustration>
          <StarTwoToneIcon />
        </StyledActivityIllustration>

        <Box pl={2} flex={1}>
          <Typography variant='h3'>Reviews</Typography>
          <Box pt={2} display='flex'>
            <Box pr={8}>
              <Typography
                gutterBottom
                variant='caption'
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                Total
              </Typography>
              <Typography variant='h2'>485</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant='caption'
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                Usefull
              </Typography>
              <Typography variant='h2'>8</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
