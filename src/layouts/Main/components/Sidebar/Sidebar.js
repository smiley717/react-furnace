import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';

import { SidebarNav } from './components';
import HomeIcon from './components/HomeIcon';
import ClipBoardCheckIcon from './components/ClipBoardCheckIcon';
import ChartBarIcon from './components/ChartBarIcon';
import GlobeIcon from './components/GlobeIcon';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '60px',
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: '#252F3D',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Home',
      href: '/home',
      icon: <HomeIcon />
    },
    {
      title: 'ClipBoardCheck',
      href: '/clipboard',
      icon: <ClipBoardCheckIcon />
    },
    {
      title: 'Chart',
      href: '/chartbar',
      icon: <ChartBarIcon />
    },
    {
      title: 'Globe',
      href: '/globe',
      icon: <GlobeIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
