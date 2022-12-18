import { AppBar, Toolbar, CssBaseline, Box } from '@mui/material';

import logo from '../../assets/logo.png';

import { CustomButton } from '../Button/Button';

import { navbarStyles } from './style';

import { useTheme } from '@emotion/react';

export const NavBar = () => {
  const theme = useTheme();

  const logOut = () => {
    console.log('Log out function');
  };
  return (
    <AppBar position="static" elevation={0} sx={navbarStyles.navbar}>
      <CssBaseline />
      <Toolbar>
        <img src={logo} style={navbarStyles.logo} />
        <Box sx={navbarStyles.buttonEnd}>
          <CustomButton
            label="Log Out"
            className="btn-primary float-right"
            size="medium"
            click={logOut}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
