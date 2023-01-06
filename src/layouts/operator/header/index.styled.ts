import { alpha, Box, styled } from "@mui/material";

export const StyledContainer = styled(Box)(
  ({ theme: { header, breakpoints, sidebar, spacing } }) => `
    height: ${header.height};
    color: ${header.textColor};
    padding: ${spacing(0, 2)};
    width: 100%;
    right: 0;
    z-index: 6;
    background-color: ${header.background ? alpha(header.background, 0.95) : 'unset'};
    backdrop-filter: blur(3px);
    position: fixed;
    justify-content: space-between;

    @media (min-width: ${breakpoints.values.lg}px) {
      left: ${sidebar.width};
      width: auto;
    }
  `
)