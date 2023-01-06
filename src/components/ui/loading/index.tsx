import React from 'react';
import { StyledContainer } from './index.styled';
type PROPS = {
  state: string;
};

export default function Loading({ state }: PROPS) {
  return (
    <>
      {state === 'loading' && (
        <StyledContainer>
          <div id='loading'></div>
        </StyledContainer>
      )}
    </>
  );
}
