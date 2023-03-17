import { useAppDispatch, useAppSelector } from '@store/hooks';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Avatar, Box, Button, darken, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, styled, Typography, useTheme } from '@mui/material';
import { createDocument, loadDocument, loadDocuments } from '@store/notion';
import { useEffect } from 'react';

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
export default function EditorSidebar() {

  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { documents } = useAppSelector(
    ({ notion }) => notion
  );

  useEffect(() => {
    dispatch(loadDocuments());
  }, [dispatch]);
  
  return (
    <StyledActionsBar
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        background: darken(theme.colors.secondary.dark, 0.1),
        ml: 0,
      }}
    >
      <Drawer variant='persistent' anchor='left' open={true}>
        <StyledActionsBar>
          <DrawerHeader>
            <Box>
              <StyledButton color='secondary' size='small'>
                <Avatar
                  variant='rounded'
                  sx={{ width: 24, height: 24, mr: 2 }}
                  alt='meocuteequas'
                  src='/static/images/avatars/1.jpg'
                />
                <StyledLabel variant='body1'>meocuteequas</StyledLabel>
              </StyledButton>
            </Box>

            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </DrawerHeader>
          <List dense disablePadding>
            <ListItemButton
              onClick={() =>
                dispatch(
                  createDocument({
                    parentId: 'fb3e0a9c21784a558cff3cbe1a6c5ff6',
                    title: 'Untitled',
                  })
                )
              }
            >
              <ListItemIcon>
                <DifferenceOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Create a template</ListItemText>
            </ListItemButton>
          </List>

          <List dense disablePadding sx={{ mt: 3 }}>
            {documents.map((document) => (
              <ListItemButton
                key={document.id}
                onClick={() => dispatch(loadDocument(document.id))}
              >
                <ListItemIcon>
                  <DescriptionOutlinedIcon />
                </ListItemIcon>
                <ListItemText>{document.title}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </StyledActionsBar>
      </Drawer>
    </StyledActionsBar>
  );
}
