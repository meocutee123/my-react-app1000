import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const StyledNavigation = styled(Box)(
  ({theme}) => `
    width: ${theme.sidebar.width};
    min-width: ${theme.sidebar.width};
    color: ${theme.colors.alpha.trueWhite[70]};
    position: relative;
    z-index: 7;
    height: 100%;
    padding-bottom: 68px;
  `
)