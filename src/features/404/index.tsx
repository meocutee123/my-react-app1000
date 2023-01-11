import { Helmet } from 'react-helmet-async';
import { Box, Button, Card, Container, Divider, FormControl, InputAdornment, OutlinedInput, styled, Typography } from '@mui/material';

import PageNotFoundIllustration from './assets/404.svg'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const Styled404 = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
);

const StyledOutlinedInput = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const StyledButton = styled(Button)(
  ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Status - 404</title>
      </Helmet>
      <Styled404>
        <Container maxWidth='md'>
          <Box textAlign='center'>
          <img alt="404" height={180} src={PageNotFoundIllustration}/>
            <Typography variant="h2" sx={{ my: 2 }}>
              The page you were looking for doesn't exist.
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
              sx={{ mb: 4 }}
            >
              It's on us, we moved the content to a different page. The search
              below should help!
            </Typography>
          </Box>
         <Container maxWidth="sm">
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
              <FormControl variant="outlined" fullWidth>
                <StyledOutlinedInput
                  type="text"
                  placeholder="Search terms here..."
                  endAdornment={
                    <InputAdornment position="end">
                      <StyledButton variant="contained" size="small">
                        Search
                      </StyledButton>
                    </InputAdornment>
                  }
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Divider sx={{ my: 4 }}>OR</Divider>
              <Button href="/" variant="outlined">
                Go to homepage
              </Button>
            </Card>
          </Container>
        </Container>
      </Styled404>
    </>
  );
}
