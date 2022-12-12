import { login } from '@app/authentication';
import { useAppDispatch } from '@app/hooks';
import { AuthenticationRequest } from '@app/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    username: yup.string().required('Hey, keep your eye on me please !!'),
    password: yup.string().required(),
  })
  .required();

export function Login() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticationRequest>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<AuthenticationRequest> = (data) =>
    dispatch(login(data));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('username')} />
        <input type='password' {...register('password')} />
        <button type='submit'>Login</button>
      </form>
    </>
  );
}
