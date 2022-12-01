import { Link } from 'react-router-dom';

export function Authors() {
  return (
    <>
      <div style={{ width: '100%', marginTop: '5rem' }}>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to='/authors/james'>James</Link>
          </li>
          <li>
            <Link to='/authors/adam'>Adam</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
