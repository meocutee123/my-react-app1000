import React, { useEffect, useState } from 'react';
import { LoaderFunction } from 'react-router-dom';
import { StyledContainer } from './index.styled';

export const searchInitialize: LoaderFunction = async ({ request }) => {
  console.log('initialize')
  const url = new URL(request.url);
  const text = url.searchParams.get('text');
  const fakeApi = new Promise<any>((resolve) =>
    setTimeout(() => resolve({ text }), 1000)
  );
  return await fakeApi
};

export default function Search() {
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    const searchBox = document.querySelector(
      'input[name="text"]'
    ) as HTMLInputElement;

    searchBox !== null && setText(searchBox.value);
  }, [text]);

  return (
    <StyledContainer>
      <h1 id='searchTerm'>Search term: {text}</h1>
      search works
    </StyledContainer>
  );
}
