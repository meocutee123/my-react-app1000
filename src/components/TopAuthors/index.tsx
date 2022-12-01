import style from './style.module.scss';

import Jennie from '@assets/jennie.svg';

import { ReactComponent as Facebook } from '@assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '@assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '@assets/icons/instagram.svg';

export function TopAuthors() {
  return (
    <>
      <div className={style.container}>
        <h2>
          <span className='highlight'>Top</span> Authors
        </h2>
        <div className={style.topAuthors}>
          <div className={style.profile}>
            <img src={Jennie} alt='author' />
          </div>
          <div className={style.authorDetails}>
            <h4>Jennie Kim</h4>
            <p>
              Blogger, activist, content creator, part time designer at:
              <strong> www.gethugothemes.com</strong>
            </p>
            <div className={style.socials}>
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
