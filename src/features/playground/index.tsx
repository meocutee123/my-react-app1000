import { FormControl, TextField, useFormControl } from '@mui/material';
import React, { useMemo } from 'react';

const ValidatedTextField = () => {
  const formControlContext = useFormControl() || {} as any;

  const { focused } = formControlContext;
  
  const helperText = useMemo(() => {
    return focused ? 'Focused' : 'Not focused';
  }, [focused]);

  return (
    <>
      <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      {helperText}
    </>
  );
};

export default function Playground() {
  return (
    <FormControl sx={{ p: 2 }} size='small' required>
      <ValidatedTextField />
    </FormControl>
  );
}
