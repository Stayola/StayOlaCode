import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';


function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/#/"
            sx={{ fontSize: 24 }}
          >
            {'Stayola'}
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
