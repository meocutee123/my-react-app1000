import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import DynamicComponent from '@components/form/flex-dynamic-form/dynamic-component';

export type FormControl = {
  name: string;
  placeholder: string;
  value?: string;
  type: string;
};

export type FormData = {
  email: string;
  password: string;
};

const initialData: FormData = {
  email: '',
  password: '',
};
const fields: FormControl[] = [
  {
    name: 'email',
    placeholder: 'email',
    type: 'text',
    value: ''
  },
  {
    name: 'password',
    placeholder: 'password',
    type: 'password',
    value: ''
  },
];

export default function Error() {
  console.log('parent re-rendered');

  const [data, setData] = useState<FormData>(initialData);

  const [elements, setElements] = useState(fields)

  const updateFields = (fields: Partial<FormData>, index: number) => {
    setData(previous => ({...previous, ...fields}))
    const prev: FormControl[] = JSON.parse(JSON.stringify(elements))
    prev[index].value = fields.email || fields.password
    setElements(prev)
  };

  const submit = () => {
    console.log(data);
  };

  return (
    <Container sx={{ mt: 3 }} maxWidth='lg'>
      <DynamicComponent elements={elements} onUpdate={updateFields} />
      <Button variant='outlined' onClick={submit}>
        Submit
      </Button>
    </Container>
  );
}
