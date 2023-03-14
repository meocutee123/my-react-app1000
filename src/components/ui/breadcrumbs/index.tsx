import React from 'react';

import { Breadcrumbs as MuiBreadCrumbs, Chip, lighten, styled } from '@mui/material';
import { ExpandMoreTwoTone, HomeTwoTone } from '@mui/icons-material';

const StyledBreadCrumbs = styled(Chip)(
  ({theme}) => `
    background-color: ${theme.colors.alpha.black[10]};
    &:hover, &:focus {
      background-color: ${lighten(theme.colors.alpha.black[30], 0.3)};
    }
    &:active {
      background-color: ${lighten(theme.colors.alpha.black[30], 0.2)};
    }
  `
) as typeof Chip

export default function BreadCrumbs() {
  const close = (event: MouseEvent) => {
    event.preventDefault()
  }
  return (
    <div role='presentation'>
      <MuiBreadCrumbs aria-label='breadcrumb'>
        <StyledBreadCrumbs
          component='a'
          href='#'
          label='Home'
          icon={<HomeTwoTone fontSize='small' />}
        />
        <StyledBreadCrumbs component='a' href='#' label='Catalog' />
        <StyledBreadCrumbs
          label='Accessories'
          deleteIcon={<ExpandMoreTwoTone fontSize='small'/>}
          onDelete={close}
        />
      </MuiBreadCrumbs>
    </div>
  );
}
