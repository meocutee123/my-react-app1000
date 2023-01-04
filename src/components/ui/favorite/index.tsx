import React from 'react';
import { Form } from 'react-router-dom';
import { StyledFavorite } from './index.styled';

type PROPS = {
  favorite: boolean;
};

export default function Favorite({ favorite }: PROPS) {
  return (
    <StyledFavorite>
      <Form method='post'>
        <button
          name='favorite'
          value={favorite ? 'false' : 'true'}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorite ? '★' : '☆'}
        </button>
      </Form>
    </StyledFavorite>
  );
}
