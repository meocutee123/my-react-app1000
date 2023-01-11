import React from 'react';

import {
  Box,
  Tooltip,
  IconButton,
  Typography,
  Card,
  CardMedia,
  styled,
  Button,
  Avatar,
} from '@mui/material';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

const StyledCard = styled(Card)(
  ({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`
);

const Input = styled('input')({
  display: 'none',
});

const StyledCardAction = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
`
);

const StyledAvatar = styled(Card)(
  ({ theme }) => `

    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`
);

const StyledUploadButton = styled(Box)(
  ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      box-shadow: ${theme.colors.shadows.primary};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
        background: ${theme.colors.primary.dark};
      }
    }
`
);

type PROPS = {
  user: IUser;
};

export default function Overview({
  user: { name, coverImg, avatar, description, location, followers, jobtitle },
}: PROPS) {
  return (
    <>
      <Box display='flex' mb={3}>
        <Tooltip arrow placement='top' title='Go back'>
          <IconButton color='primary' sx={{ p: 2, mr: 2 }}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Box>
          <Typography variant='h3' component='h3' gutterBottom>
            Profile for {name}
          </Typography>
          <Typography variant='subtitle2'>
            This is a profile page. Easy to modify, always blazing fast
          </Typography>
        </Box>
      </Box>

      <StyledCard>
        <CardMedia image={coverImg} />
        <StyledCardAction>
          <Input accept='image/*' id='change-cover' multiple type='file' />
          <label htmlFor='change-cover'>
            <Button
              startIcon={<UploadTwoToneIcon />}
              variant='contained'
              component='span'
            >
              Change cover
            </Button>
          </label>
        </StyledCardAction>
      </StyledCard>

      <StyledAvatar>
        <Avatar variant='rounded' alt={name} src={avatar} />
        <StyledUploadButton>
          <Input
            accept='image/*'
            id='icon-button-file'
            name='icon-button-file'
            type='file'
          />
          <label htmlFor='icon-button-file'>
            <IconButton component='span' color='primary'>
              <UploadTwoToneIcon />
            </IconButton>
          </label>
        </StyledUploadButton>
      </StyledAvatar>

      <Box py={2} pl={2} mb={3}>
        <Typography gutterBottom variant='h4'>
          {name}
        </Typography>
        <Typography variant='subtitle2'>{description}</Typography>
        <Typography sx={{ py: 2 }} variant='subtitle2' color='text.primary'>
          {jobtitle} | {location} | {followers} followers
        </Typography>
        <Box
          display={{ xs: 'block', md: 'flex' }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Button size='small' variant='contained'>
              Follow
            </Button>
            <Button size='small' sx={{ mx: 1 }} variant='outlined'>
              View website
            </Button>
            <IconButton color='primary' sx={{ p: 0.5 }}>
              <MoreHorizTwoToneIcon />
            </IconButton>
          </Box>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            size='small'
            variant='text'
            endIcon={<ArrowForwardTwoToneIcon />}
          >
            See all {followers} connections
          </Button>
        </Box>
      </Box>
    </>
  );
}
