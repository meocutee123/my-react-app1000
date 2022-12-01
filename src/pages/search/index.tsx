import { Post } from '@components/Post';
import style from './style.module.scss';

export function Search() {
  return (
    <>
      <div className={style.container}>
        <div className={style.heading}>
          <h4>
            <span>
              <div></div>
              <span>Search Result For</span> Travel
            </span>
          </h4>
        </div>
        <div className={style.posts}>
          <Post direction='horizontal' />
          <Post direction='horizontal' />
          <Post direction='horizontal' />
          <Post direction='horizontal' />
        </div>
      </div>
    </>
  );
}
