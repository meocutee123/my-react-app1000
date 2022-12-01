import style from './style.module.scss';

import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right.svg';
import { NavLink } from 'react-router-dom';

export function About() {
  return (
    <>
      <div className={style.container}>
        <div className={style.headline}>
          <h2>
            <span className='highlight'>Notebook is a place</span> where you can
            find your perfect blogs
          </h2>
          <p>
            Dynamically underwhelm integrated outsourcing via timely models.
            Rapidiously reconceptualize visionary imperatives without 24/365
            catalysts for change. Completely streamline functionalized models
            and out-of-the-box functionalities. Authoritatively target proactive
            vortals vis-a-vis exceptional results. Compellingly brand emerging
            sources and compelling materials. Globally iterate parallel content
          </p>
          <p>
            <strong>The best ideas can change who we are.</strong>
          </p>
          <p>
            Dynamically underwhelm integrated outsourcing via timely models.
            Rapidiously reconceptualize visionary imperatives without 24/365
            catalysts for
          </p>
        </div>
        <div className={style.featuredOn}>
          <h2>
            <span className='highlight'>We are</span> featured on
          </h2>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.headline}>
          <h2>
            <span className='highlight'>Meet</span> Our Authors
          </h2>
        </div>
        <div className={style.authors}>
          <div className={style.author}>
            <div className='avatar'>
              <img src='' alt='' />
            </div>
            <div className={style.authorDetails}>
              <p className='name'>Jennie Kim</p>
              <span>23 Posts</span>
              <NavLink to='/author'>
                See details about author <ArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
