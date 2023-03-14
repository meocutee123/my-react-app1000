import { api } from '@lib/axios';
import React from 'react';
import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';

export const loadMember: LoaderFunction = async ({ params }) =>
  await api.get<Member>('members/' + params.name);

export const updateMember: ActionFunction = async ({ request, params }) => {
  const data = await request.formData();
  await api.put('members/' + data.get('id'), data);
  return redirect('/team');
};

export default function MemberUpdate() {
  const member = useLoaderData() as Member;
  const navigate = useNavigate();

  return (
    <Form method='post'>
      <input
        hidden
        readOnly={true}
        type='text'
        name='id'
        defaultValue={member.id}
      />
      <label htmlFor="name">Name</label>
      <input type='text' name='name' defaultValue={member.name} placeholder='Name'/>
      <button type='submit'>Submit</button>
      <button type='button' onClick={() => navigate(-1)}>
        Cancel
      </button>
    </Form>
  );
}
