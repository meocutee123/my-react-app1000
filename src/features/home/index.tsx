import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Box,
  Button,
  ButtonBaseActions,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

type ComponentContextType = {
  languages: string[];
};
const ComponentContext = createContext<ComponentContextType | null>(null);

export default function Home() {
  const [languages, setLanguages] = useState<string[]>([
    'vi',
    'en',
    'cn',
    'jp',
    'rs',
  ]);

  const [count, setCount] = useState<number>(0);

  const addLanguages = useCallback(() => {
    setLanguages((previous) => [...previous, 'tw']);
  }, []);

  const increment = () => {
    console.log(button.current)
    setCount((previous) => previous + 1);
  };

  const button = useRef<HTMLButtonElement>(null);

  
  const expensiveCalculation = (num: number) => {
    for (let i = 0; i < 1000000000; i++) num += 1;    
    return num;
  };
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  

  return (
    <Container sx={{ mt: 3 }} maxWidth='lg'>
      <h1>Languages: {JSON.stringify(languages)}</h1>
      <Typography variant='h3'>I've rendered {count} times</Typography>
      <Typography variant='h3'>Expensive calculation: {calculation}</Typography>

      <Button ref={button} variant='outlined' onClick={increment}>
        Count
      </Button>

      <Language addLanguages={addLanguages} languages={languages} />

      <ComponentContext.Provider value={{ languages }}>
        <Component1 />
      </ComponentContext.Provider>
    </Container>
  );
}

type PROPS = {
  languages: string[];
  addLanguages: () => void;
};

const Language = memo(({ languages, addLanguages }: PROPS) => {
  console.log('child render');
  return (
    <Box pt={2}>
      <Button variant='outlined' onClick={addLanguages}>
        Add languages
      </Button>

      <List>
        {languages.map((language, index) => (
          <ListItem key={index}>
            <ListItemText>{language}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
});

const Component1 = () => {
  return (
    <>
      <h1>Component 1</h1>
      <Component2 />
    </>
  );
};

const Component2 = () => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
};

const Component3 = () => {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
};

const Component4 = () => {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
};

const Component5 = () => {
  const { languages } = useContext(ComponentContext) as ComponentContextType;
  return (
    <>
      <h1>Component 5</h1>
      {JSON.stringify(languages)}
    </>
  );
};
