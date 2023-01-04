import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hook';

import { RootState } from '@store/index';
import { fetchPokemon } from './pokemonSlice';

export function Pokemon() {
  const pokemon = useAppSelector(({ pokemon }: RootState) => pokemon.collection);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [dispatch])

  return (
    <>
    pokemon works
    </>
  );
}
