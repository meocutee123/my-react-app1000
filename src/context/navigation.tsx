import { FC, useState, createContext, ReactNode } from 'react';

type Visibility = 'open' | 'close';

type Context = {
  visibility: Visibility;
  toggle: () => void;
  close: () => void;
};

type PROPS = {
  children: ReactNode;
};

export const NavigationContext = createContext<Context>({} as Context);

export const NavigationProvider: FC<PROPS> = ({ children }: PROPS) => {
  const [visibility, setVisibility] = useState<Visibility>('close');

  const toggle = () =>
    setVisibility((state) => (state === 'open' ? 'close' : 'open'));

  const close = () => setVisibility('close');

  return (
    <NavigationContext.Provider value={{ visibility, toggle, close }}>
      {children}
    </NavigationContext.Provider>
  );
};
