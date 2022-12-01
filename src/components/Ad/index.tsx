import Button from '@components/Elements/Button';
import style from './style.module.scss';

export function Ad() {
  return (
    <>
      <div className={style.ad}>
        <div className={style.indicator}>Ad</div>
        <h2>want to travel sikkim by car?</h2>
        <p>
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into
        </p>

        <Button caption='Visit Us' theme='white'></Button>
      </div>
    </>
  );
}
