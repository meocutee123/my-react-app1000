import FullCalendar from '@fullcalendar/react';
import {
  ArrowBack,
  ArrowForward,
  CalendarViewDayTwoTone,
  CalendarViewMonthTwoTone,
  CalendarViewWeekTwoTone,
  EventTwoTone,
  ViewAgendaTwoTone,
} from '@mui/icons-material';

import { Box, IconButton, styled, Tooltip, Typography } from '@mui/material';

import React, { RefObject, useEffect, useState } from 'react';

const StyledButton = styled(IconButton)(
  ({ theme }) => `
    .MuiSvgIcon-root {
      fill: ${theme.colors.primary.dark};
    }
  `
);

type PROPS = {
  calendar: RefObject<FullCalendar>;
};

const getFormatedDate = (date: Date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const year = date.getFullYear();
  const month = date.getMonth();

  return `${months[month]} ${year}`;
};

export default function Header({ calendar }: PROPS) {
  const [calendarApi, setCalendarApi] = useState(() => {
    const fullCalendar = calendar.current;

    return fullCalendar ? fullCalendar.getApi() : null;
  });

  const [date, setDate] = useState(() => {
    return calendarApi === null
      ? getFormatedDate(new Date())
      : getFormatedDate(calendarApi.getDate());
  });

  useEffect(() => {
    const fullCalendar = calendar.current;
    fullCalendar && setCalendarApi(fullCalendar.getApi());
  }, [calendar]);

  const dateChange = (direction: 'next' | 'prev' | 'today') => {
    if (calendarApi === null) return;
    switch (direction) {
      case 'next':
        calendarApi.next();
        break;
      case 'prev':
        calendarApi.prev();
        break;
      default:
        calendarApi.today();
    }

    setDate(getFormatedDate(calendarApi.getDate()));
  };

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      mb={5}
    >
      <Box>
        <Tooltip title='Previous date'>
          <StyledButton onClick={() => dateChange('prev')}>
            <ArrowBack />
          </StyledButton>
        </Tooltip>

        <Tooltip title='Today'>
          <StyledButton onClick={() => dateChange('today')}>
            <EventTwoTone />
          </StyledButton>
        </Tooltip>

        <Tooltip title='Next date'>
          <StyledButton onClick={() => dateChange('next')}>
            <ArrowForward />
          </StyledButton>
        </Tooltip>
      </Box>
      <Box>
        <Typography variant='h3'>{date}</Typography>
      </Box>
      <Box>
        <Tooltip title='Month'>
          <StyledButton size='medium'>
            <CalendarViewMonthTwoTone />
          </StyledButton>
        </Tooltip>

        <Tooltip title='Week'>
          <StyledButton size='medium'>
            <CalendarViewWeekTwoTone />
          </StyledButton>
        </Tooltip>

        <Tooltip title='Date'>
          <StyledButton size='medium'>
            <CalendarViewDayTwoTone />
          </StyledButton>
        </Tooltip>

        <Tooltip title='Agenda'>
          <StyledButton size='medium'>
            <ViewAgendaTwoTone />
          </StyledButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
