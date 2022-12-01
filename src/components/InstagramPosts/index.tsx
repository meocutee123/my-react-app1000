import style from './style.module.scss';
import { ReactComponent as InstangramOutline } from '@assets/icons/instagram--outline.svg';
export function InstagramPosts() {
  return (
    <>
      <div className={style.container}>
        <h2>
          <span className='highlight'>Instangram</span> Posts
        </h2>
        <div className={style.posts}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <div className={style.mask}>
              <InstangramOutline />
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
