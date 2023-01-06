import { useLoaderData, useNavigate } from 'react-router-dom';
import { StyledContainer } from './index.styled';

export default function Member() {
  const member = useLoaderData() as Member;
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <p>{member.name} says hi</p>
      <button onClick={() => navigate(`/team/${member.id}/update`)}>
        Update
      </button>
    </StyledContainer>
  );
}
