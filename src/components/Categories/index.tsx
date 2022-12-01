import style from './style.module.scss';

interface Props {
  size?: string;
}
export function FollowOn(props: Props) {
  return (
    <>
      <div className={style.container}>
        <h2>
          <span className='highlight'>Instangram</span> Posts
        </h2>
        <div className={style.categories}>
          <ul>
            <li>Lifestyle <span>09</span></li>
            <li>Travel <span>05</span></li>
            <li>Food <span>09</span></li>
            <li>Healthcare <span>10</span></li>
            <li>Technology <span>03</span></li>
          </ul>
        </div>
      </div>
    </>
  );
}
