import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';


export default function Search() {
  const data = useLoaderData() as any;
  return (
    <Form role='search' action='/search' method='get'>
      <input placeholder='Search...' defaultValue={data?.text} name='text'/>
      <button type='submit'>Submit</button>
    </Form>
  );
}
