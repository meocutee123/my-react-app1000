import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

type PROPS = {
  children?: ReactNode;
};

const Client: FC<PROPS> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100%',
      }}
    >
      {children || <Outlet />}
    </Box>
  );
};

Client.propTypes = {
  children: PropTypes.node,
};

export default Client;
