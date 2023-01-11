import React, { useContext } from 'react';
import { Button, List, ListItem, ListSubheader } from '@mui/material';

import { NavLink as RouterLink } from 'react-router-dom';

import { StyledMenu, StyledSubmenuContainer } from './index.styled';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import { NavigationContext } from '@context/navigation';
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const { t } = useTranslation();

  const { close } = useContext(NavigationContext);

  return (
    <StyledMenu>
      <List component='div'>
        <StyledSubmenuContainer>
          <List component='div'>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/overview'
                startIcon={<DesignServicesTwoToneIcon />}
              >
                {t('Overview')}
              </Button>
            </ListItem>
          </List>
        </StyledSubmenuContainer>
      </List>
      <List
        component='div'
        subheader={
          <ListSubheader component='div' disableSticky>
            Dashboards
          </ListSubheader>
        }
      >
        <StyledSubmenuContainer>
          <List component='div'>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/dashboards/crypto'
                startIcon={<BrightnessLowTwoToneIcon />}
              >
                Cryptocurrency
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/dashboards/messenger'
                startIcon={<MmsTwoToneIcon />}
              >
                Messenger
              </Button>
            </ListItem>
          </List>
        </StyledSubmenuContainer>
      </List>
      <List
        component='div'
        subheader={
          <ListSubheader component='div' disableSticky>
            Management
          </ListSubheader>
        }
      >
        <StyledSubmenuContainer>
          <List component='div'>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/management/transactions'
                startIcon={<TableChartTwoToneIcon />}
              >
                Transactions List
              </Button>
            </ListItem>
          </List>
        </StyledSubmenuContainer>
      </List>
      <List
        component='div'
        subheader={
          <ListSubheader component='div' disableSticky>
            Accounts
          </ListSubheader>
        }
      >
        <StyledSubmenuContainer>
          <List component='div'>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/management/profile/details'
                startIcon={<AccountCircleTwoToneIcon />}
              >
                User Profile
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/management/profile/settings'
                startIcon={<DisplaySettingsTwoToneIcon />}
              >
                Account Settings
              </Button>
            </ListItem>
          </List>
        </StyledSubmenuContainer>
      </List>
      <List
        component='div'
        subheader={
          <ListSubheader component='div' disableSticky>
            Components
          </ListSubheader>
        }
      >
        <StyledMenu>
          <List component='div'>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/components/buttons'
                startIcon={<BallotTwoToneIcon />}
              >
                Buttons
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/components/modals'
                startIcon={<BeachAccessTwoToneIcon />}
              >
                Modals
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/components/accordions'
                startIcon={<EmojiEventsTwoToneIcon />}
              >
                Accordions
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/components/tabs'
                startIcon={<FilterVintageTwoToneIcon />}
              >
                Tabs
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/components/badges'
                startIcon={<HowToVoteTwoToneIcon />}
              >
                Badges
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/components/tooltips'
                startIcon={<LocalPharmacyTwoToneIcon />}
              >
                Tooltips
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/components/avatars'
                startIcon={<RedeemTwoToneIcon />}
              >
                Avatars
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/components/cards'
                startIcon={<SettingsTwoToneIcon />}
              >
                Cards
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/components/forms'
                startIcon={<TrafficTwoToneIcon />}
              >
                Forms
              </Button>
            </ListItem>
          </List>
        </StyledMenu>
      </List>
      <List
        component='div'
        subheader={
          <ListSubheader component='div' disableSticky>
            Extra Pages
          </ListSubheader>
        }
      >
        <StyledSubmenuContainer>
          <List component='div'>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/status/404'
                startIcon={<CheckBoxTwoToneIcon />}
              >
                Error 404
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/status/500'
                startIcon={<CameraFrontTwoToneIcon />}
              >
                Error 500
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/status/coming-soon'
                startIcon={<ChromeReaderModeTwoToneIcon />}
              >
                Coming Soon
              </Button>
            </ListItem>
            <ListItem component='div'>
              <Button
                disableRipple
                component={RouterLink}
                onClick={close}
                to='/status/maintenance'
                startIcon={<WorkspacePremiumTwoToneIcon />}
              >
                Maintenance
              </Button>
            </ListItem>
          </List>
        </StyledSubmenuContainer>
      </List>
    </StyledMenu>
  );
}
