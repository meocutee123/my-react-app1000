import Button from '@components/Elements/Button';
import { FollowOn } from '@components/FollowOn';
import style from './style.module.scss';
export function Contact() {
  return (
    <>
      <div className={style.container}>
        <div className={style.contactUs}>
          <h1>
            <span>Contact</span> Us
          </h1>
        </div>
        <div className='d-flex' style={{ gap: '81px' }}>
          <form className={style.contactForm}>
            <div className='d-flex gap-4'>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Type your message' />
            <div>
              <Button caption='Send Message'></Button>
            </div>
          </form>
          <div className={style.additionalInformation}>
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
