import style from './style.module.scss';

import { ReactComponent as Hand } from '@assets/icons/hand.svg';
import { ReactComponent as Chip } from '@assets/icons/chip.svg';
import { ReactComponent as Dress } from '@assets/icons/dress.svg';
import { ReactComponent as Camera } from '@assets/icons/camera.svg';
import { ReactComponent as FastFood } from '@assets/icons/fast-food.svg';
import { ReactComponent as Airplane } from '@assets/icons/airplane.svg';
// eslint-disable-next-line
import { ReactComponent as AirplaneWhite } from '@assets/icons/airplane--white.svg';
import { ReactComponent as Heart } from '@assets/icons/heart.svg';

export function Categories() {
  return (
    <>
      <div className={style.container}>
        <div className={style.headline}>
          <h1>Categories</h1>
        </div>
        <div className={style.categories}>
          <div>
            <Hand />
            enviroment & nature
          </div>
          <div>
            <Chip />
            technology
          </div>
          <div>
            <Dress />
            lifestyle & fashion
          </div>
          <div>
            <Camera />
            photography
          </div>

          <div>
            <FastFood />
            food
          </div>
          <div>
            <Airplane />
            holiday & travel
          </div>
          <div>
            <Heart />
            healthcare
          </div>
        </div>
      </div>
    </>
  );
}
