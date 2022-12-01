import { PostMeta } from '@components/PostMeta';
import style from './style.module.scss';

import thumbnail from '@assets/featured-image.jpg';

interface Props {
  direction?: string;
}

export function Post(props: Props) {
  return (
    <>
      <div
        className={`${style.post} ${
          props.direction === 'horizontal' ? style.horizontal : style.vertical
        }`}
      >
        <div className={style.thumbnail}>
          <img src={thumbnail} alt='thumbnail' />
        </div>
        <div className={style.postContentWrapper}>
          <div className={style.tags}>
            <span>Travel</span>
            <span>Technology</span>
            <span>Food</span>
          </div>
          <div className={style.headline}>
            <h2>Design is the Mix of emotions</h2>
          </div>
          <PostMeta />
          <p>
            Did you come here for something in particular or just general
            Riker-bashing? And blowing into
          </p>
        </div>
      </div>
    </>
  );
}
