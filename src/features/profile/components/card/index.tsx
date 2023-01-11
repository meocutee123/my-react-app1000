import React, { ChangeEvent, useState } from 'react';
import {
  Avatar,
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  lighten,
  Radio,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const StyledCard = styled(MuiCard)(() => ``);

const SavedCard = styled(MuiCard)(
  ({ theme }) => `
     border: 1px solid ${theme.colors.alpha.black[30]};
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
  `
);

const Vendor = styled('img')(
  ({ theme }) => `
      border: 1px solid ${theme.colors.alpha.black[30]};
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(1)};
      margin-right: ${theme.spacing(2)};
      background: ${theme.colors.alpha.white[100]};
  `
);

const StyledIconButton = styled(IconButton)(
  ({ theme }) => `
     background: ${theme.colors.error.lighter};
     color: ${theme.colors.error.main};
     padding: ${theme.spacing(0.5)};

     &:hover {
      background: ${lighten(theme.colors.error.lighter, 0.4)};
     }
  `
);

const StyledAction = styled(MuiCard)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
  `
);

const StyledAvatar = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
  `
);
export default function Card() {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleDelete = () => {};

  return (
    <StyledCard>
      <CardHeader title='Card' subheader='2 saved cards' />
      <Divider />
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SavedCard sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display='flex' alignItems='center'>
                <Vendor
                  src='/static/images/placeholders/logo/visa.png'
                  alt='Visa'
                />
                <Box>
                  <Typography variant='h3' fontWeight='normal'>
                    •••• 6879
                  </Typography>
                  <Typography variant='subtitle2'>
                    Expires:{' '}
                    <Typography component='span' color='text.primary'>
                      12/24
                    </Typography>
                  </Typography>
                </Box>
              </Box>

              <Box
                pt={3}
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <FormControlLabel
                  value='a'
                  control={
                    <Radio
                      checked={selectedValue === 'a'}
                      onChange={handleChange}
                      value='a'
                      color='primary'
                      name='primary-card'
                    />
                  }
                  label='Primary'
                />
                <Tooltip arrow title='Remove this card'>
                  <StyledIconButton onClick={() => handleDelete()}>
                    <DeleteTwoToneIcon fontSize='small' />
                  </StyledIconButton>
                </Tooltip>
              </Box>
            </SavedCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <SavedCard sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display='flex' alignItems='center'>
                <Vendor
                  src='/static/images/placeholders/logo/mastercard.png'
                  alt='Visa'
                />
                <Box>
                  <Typography variant='h3' fontWeight='normal'>
                    •••• 6879
                  </Typography>
                  <Typography variant='subtitle2'>
                    Expires:{' '}
                    <Typography component='span' color='text.primary'>
                      12/24
                    </Typography>
                  </Typography>
                </Box>
              </Box>

              <Box
                pt={3}
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <FormControlLabel
                  value='a'
                  control={
                    <Radio
                      checked={selectedValue === 'a'}
                      onChange={handleChange}
                      value='a'
                      color='primary'
                      name='primary-card'
                    />
                  }
                  label='Primary'
                />
                <Tooltip arrow title='Remove this card'>
                  <StyledIconButton onClick={() => handleDelete()}>
                    <DeleteTwoToneIcon fontSize='small' />
                  </StyledIconButton>
                </Tooltip>
              </Box>
            </SavedCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip arrow title='Click to add a new card'>
              <StyledAction>
                <CardActionArea sx={{ px: 1 }}>
                  <CardContent>
                    <StyledAvatar>
                      <AddTwoToneIcon fontSize='large' />
                    </StyledAvatar>
                  </CardContent>
                </CardActionArea>
              </StyledAction>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </StyledCard>
  );
}
