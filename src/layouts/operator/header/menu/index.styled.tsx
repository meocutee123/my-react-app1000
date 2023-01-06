import { Box, styled } from '@mui/material';

export const StyledContainer = styled(Box)(
  ({ theme: { transitions, spacing, general, colors } }) => `
    .MuiTouchRipple-root {
      display: none;
    }

    .MuiListItem-root {
        transition: ${transitions.create(['color', 'fill'])};
        
        &.MuiListItem-indicators {
            padding: ${spacing(1, 2)};
        
            .MuiListItemText-root {
                .MuiTypography-root {
                    &:before {
                        height: 4px;
                        width: 22px;
                        opacity: 0;
                        visibility: hidden;
                        display: block;
                        position: absolute;
                        bottom: -10px;
                        transition: all .2s;
                        border-radius: ${general.borderRadiusLg};
                        content: "";
                        background: ${colors.primary.main};
                    }
                }
            }

            &.active,
            &:active,
            &:hover {
            
                background: transparent;
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            opacity: 1;
                            visibility: visible;
                            bottom: 0px;
                        }
                    }
                }
            }
        }
    } 
  `
);
