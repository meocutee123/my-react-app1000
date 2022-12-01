import style from './style.module.scss';

export function TodaysUpdate() {
  return (
    <>
      <div className={style.container}>
        <h2>
          <span className='highlight'>Instangram</span> Posts
        </h2>
        <div className={style.todaysUpdate}>
          <div>
            <span>14</span>
            <span>New Posts</span>
          </div>
          <div>
            <span>480</span>
            <span>Total Visitors</span>
          </div>
          <div>
            <span>29</span>
            <span>New Subscribers</span>
          </div>
          <div>
            <span>138</span>
            <span>Blog Read</span>
          </div>
        </div>
      </div>
    </>
  );
}
