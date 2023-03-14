import React, { createRef } from 'react';
import EventIcon from '@mui/icons-material/Event';
import {
  alpha,
  Box,
  Button,
  darken,
  lighten,
  styled,
  Typography,
  useTheme,
} from '@mui/material';

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import Header from './components/header';

const StyledHeader = styled(Box)(() => ``);

const StyledButton = styled(Button)(
  ({ theme }) => `
    background-color: ${theme.colors.primary.dark};
    &:hover {
      background-color: ${darken(theme.colors.primary.dark, 0.2)};
    }
  `
);

const StyledContainer = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.trueWhite[70]};
    border-radius: 10px;

    .fc-col-header-cell {
      padding: ${theme.spacing(1)};
      background-color: ${theme.colors.alpha.black[5]};
    }

    .fc-theme-standard td, .fc-theme-standard th {
      border-color: ${theme.colors.alpha.black[50]}
    }

    .fc-daygrid-day.fc-day-today {
      background-color: ${theme.colors.alpha.black[30]}
    }

    .fc-daygrid-day-number {
      font-weight: ${theme.typography.fontWeightBold}
    }

    .fc-daygrid-day:hover {
      background-color: ${theme.colors.alpha.black[10]}
    }
  `
);
export default function Calendar() {
  const theme = useTheme();

  const calendar = createRef<FullCalendar>();
  return (
    <Box>
      <StyledHeader
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p={4}
        sx={{
          width: '100%',
          boxShadow:
            theme.palette.mode === 'dark'
              ? `0 1px 0 ${alpha(
                  lighten(theme.colors.primary.main, 0.7),
                  0.15
                )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
              : `0px 2px 8px -3px ${alpha(
                  theme.colors.alpha.black[100],
                  0.2
                )}, 0px 5px 22px -4px ${alpha(
                  theme.colors.alpha.black[100],
                  0.1
                )}`,
        }}
      >
        <Box>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h3'>Events</Typography>
            <Typography
              variant='h6'
              sx={{ color: (theme) => theme.colors.alpha.black[70] }}
            >
              Check out the latest events and mettings in your calendar
            </Typography>
          </Box>
        </Box>

        <Box>
          <StyledButton startIcon={<EventIcon />} variant='contained'>
            Add metting
          </StyledButton>
        </Box>
      </StyledHeader>

      <Box sx={{ mt: 3 }} px={4} pt={3}>
        <StyledContainer px={2} py={3}>
          <Header calendar={calendar}/>
          <FullCalendar
            ref={calendar}
            plugins={[dayGridPlugin]}
            headerToolbar={false}
            initialView='dayGridMonth'
          ></FullCalendar>
        </StyledContainer>
      </Box>
    </Box>
  );
}
