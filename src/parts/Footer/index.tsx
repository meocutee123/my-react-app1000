import style from './style.module.scss';

import { ReactComponent as Brand } from '@assets/brand.svg';
import { FollowOn } from '@components/FollowOn';

export function Footer() {
  return (
    <>
      <footer>
        <div className={style.container}>
          <div className={style.brand}>
            <Brand />
            <div className='disclaimers'>
              <p>
                Did you come here for something in particular or just general
                Riker
              </p>
            </div>
          </div>
          <div className={style.sitemap}>
            <h4>Blogs</h4>
            <ul>
              <li>Travel</li>
              <li>Technology</li>
              <li>Lifestyle</li>
              <li>Fashion</li>
              <li>Business</li>
            </ul>
          </div>
          <div className={style.quickLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Suport</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className={style.contact}>
            <div className={style.inlineForm}>
              <h4>Subscribe For Newletter</h4>
              <form action='/'>
                <input type='text' placeholder='Your Email' />
                <button type='submit'>Subscribe</button>
              </form>
            </div>
            <FollowOn />
          </div>
        </div>
        <div className={style.copyright}>
          <p>Designed By Themefisher & Developed By Meocuteequas</p>
        </div>
      </footer>
    </>
  );
}
