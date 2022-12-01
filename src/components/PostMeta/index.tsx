import style from './style.module.scss';

import { ReactComponent as Calendar } from '@assets/icons/calendar.svg';
import { ReactComponent as Clock } from '@assets/icons/clock.svg';

import thumbnail from '@assets/featured-image.jpg';

export function PostMeta() {
  return (
    <>
      <div className={style.entryMeta}>
        <div className={style.author}>
          <img src={thumbnail} alt='author' />
          <span>Jennie Kim</span>
        </div>
        |
        <div className={style.publishDate}>
          <Calendar /> <span>02 December 2022</span>
        </div>
        |
        <div className={style.timeToRead}>
          <Clock /> <span>3 Min. To Read</span>
        </div>
      </div>
    </>
  );
}
