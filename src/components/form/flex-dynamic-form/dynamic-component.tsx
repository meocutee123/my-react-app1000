import React from 'react';
import { Box, TextField } from '@mui/material';
import { FormControl, FormData } from '@features/500';

type PROPS = {
  elements: FormControl[];
  onUpdate: (fields: Partial<FormData>, index: number) => void;
};
export default function DynamicComponent({ elements, onUpdate }: PROPS) {
  console.log('child re-rendered');
  return (
    <Box>
      {elements.map((el, index) => (
        <TextField key={el.name} variant='outlined'
          {...el}          
          onChange={e => onUpdate({[el.name]: e.target.value}, index)}
        />
      ))}
    </Box>
  );
}
