import { Box, Button, styled, Typography } from "@mui/material";

export const StyledActionsBar = styled(Box)(
  ({ theme }) => `
  width: ${theme.sidebar.width};
  min-width: ${theme.sidebar.width};
  color: ${theme.colors.secondary.main};  
  position: relative,
  height: 100%;
  `
);

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const StyledButton = styled(Button)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(1)};
  `
);

export const StyledTextContainer = styled(Box)(
  ({ theme }) => `
    text-align: left;
    padding-left: ${theme.spacing(1)};
  `
);

export const StyledLabel = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.secondary.main};
    display: block;
  `
);

export const StyledDescription = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.secondary.main};
    display: block;
  `
);