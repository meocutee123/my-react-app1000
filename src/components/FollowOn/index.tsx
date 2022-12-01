import style from './style.module.scss';

import { ReactComponent as Twitter } from '@assets/icons/twitter-active.svg';
import { ReactComponent as Facebook } from '@assets/icons/facebook.svg';
import { ReactComponent as Printerest } from '@assets/icons/printerest.svg';
import { ReactComponent as Instagram } from '@assets/icons/instagram.svg';

interface Props {
  size?: string;
}
export function FollowOn(props: Props) {
  return (
    <>
      <div className={`${style.socials} ${props.size && style.compact}`}>
        <h4>Follow On:</h4>
        <ul>
          <li>
            <Twitter />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Printerest />
          </li>
          <li>
            <Instagram />
          </li>
        </ul>
      </div>
    </>
  );
}
