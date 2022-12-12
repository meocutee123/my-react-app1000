import * as yup from 'yup';
import '../../helpers/string.extensions';
import styles from './style.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@components/Elements/Button';
import { FollowOn } from '@components/FollowOn';
import { SubmitHandler, useForm } from 'react-hook-form';
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required('Hey, keep your eye on me please !!'),
    email: yup
      .string()
      .required('Email please !')
      .email('We found that the email is in badly formatted'),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contactUs}>
          <h1>
            <span>Contact</span> Us
          </h1>
        </div>
        <div className='d-flex' style={{ gap: '81px' }}>
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='d-flex gap-4'>
              <div className='position-relative'>
                <input type='text' placeholder='Name' {...register('name')} />
                <small className={styles.errorMessage}>
                  {errors.name?.message}
                </small>
              </div>
              <div className='position-relative'>
                <input type='text' placeholder='Email' {...register('email')} />
                <small className={styles.errorMessage}>
                  {errors.email?.message}
                </small>
              </div>
            </div>

            <div className='position-relative'>
              <input
                type='text'
                placeholder='Subject'
                {...register('subject')}
              />
              <small className={styles.errorMessage}>
                {errors.subject?.message}
              </small>
            </div>

            <div className='position-relative'>
              <textarea
                placeholder='Type your message'
                {...register('message')}
              />
              <small className={styles.errorMessage}>
                {errors.message?.message}
              </small>
            </div>
            <div>
              <Button caption='Send Message'></Button>
            </div>
          </form>
          <div className={styles.additionalInformation}>
            <p>
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without
            </p>
            <p>blog.notebook@gmail.com</p>
            <p>+886554 654654</p>
            <p>9567 Turner Trace Apt. BC C3G8A4</p>

            <FollowOn size='compact' />
          </div>
        </div>
      </div>
    </>
  );
}
