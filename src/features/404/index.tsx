import { StyledContainer } from './index.styled';
import { ReactComponent as ArrowLeft } from '@assets/icons/arrow-right.svg';
import Cookie from '@components/ui/cookie';
import { useRouteError } from 'react-router-dom';

export function NotFound() {

  const error = useRouteError()
  console.log(error)
  return (
    <>
      <StyledContainer>
        <div className='four-oh-four'>
          <span>404</span>
          <div>
            <span>Page not found</span>
            <span>Looks like you might be lost...</span>
          </div>
        </div>

        <a href='/'>
          <span>
            <span>Go back home</span> <ArrowLeft />
          </span>
        </a>
      </StyledContainer>
    </>
  );
}
