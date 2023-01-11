import { Box, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
type PROPS = {
  className?: string;
  children?: ReactNode;
};

export default function Scrollbar({ className, children, ...rest }: PROPS) {
  const theme = useTheme();

  return (
    <Scrollbars
      autoHide
      renderThumbVertical={() => {
        return (
          <Box
            sx={{
              width: 5,
              background: `${theme.colors.alpha.black[10]}`,
              borderRadius: `${theme.general.borderRadiusLg}`,
              transition: `${theme.transitions.create(['background'])}`,

              '&:hover': {
                background: `${theme.colors.alpha.black[30]}`,
              },
            }}
          />
        );
      }}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
}
