import { useAppDispatch, useAppSelector } from '@app/hooks';
import { Link } from 'react-router-dom';
import { collection, fetchCountries } from './countrySlice';
import styles from './style.module.scss';

export function Countries() {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(collection);

  return (
    <>
      <div className={styles.container}>
        <button onClick={() => dispatch(fetchCountries())}>
          fetch countries
        </button>
        <ol>
          {countries.map((country) => (
            <li>
              <Link to={'/countries/' + country.name.common}>
                {country.name.common}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
