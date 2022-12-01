import style from './style.module.scss';

import { ReactComponent as PageNotFound } from '@assets/404.svg';
import { ReactComponent as ArrowLeft } from '@assets/icons/arrow-left.svg';
import { NavLink } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <div className={style.container}>
        <PageNotFound />
        <h5>the page you are looking for does not exist!</h5>
        <div>
          <h4>
            <ArrowLeft />
            <NavLink to='/'>Back To Homepage</NavLink>
          </h4>
        </div>
      </div>
    </>
  );
}
