import Navigation from '@layouts/navigation';
import { Outlet } from 'react-router-dom';
import { StyledContainer } from './index.styled';
export function Home() {
  return (
    <StyledContainer>
      <p>Home works</p>
    </StyledContainer>
  );
}
