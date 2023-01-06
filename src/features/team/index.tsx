import { api } from '@lib/axios';
import { Box, Grow, Paper } from '@mui/material';
import { LoaderFunction, useLoaderData, useNavigate } from 'react-router-dom';
import { StyledContainer } from './index.styled';

export const loadMembers: LoaderFunction = async () =>
  await api.get<Array<Member>>('members');

export default function Team() {
  const members = useLoaderData() as Array<Member>;
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {members.map((member) => (
          <Grow in={true} key={member.id}>
            <Paper
              variant='outlined'
              square
              sx={{ m: 1 }}
              onClick={() => navigate('/team/' + member.id)}
            >
              {member.name}
            </Paper>
          </Grow>
        ))}
      </Box>
    </StyledContainer>
  );
}
