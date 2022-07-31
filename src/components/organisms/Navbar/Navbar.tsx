import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';

import { signOut } from '@api/auth';

import { AppBar, ToolBar } from './Navbar.style';

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut();
    navigate('/auth/sign-in');
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <ToolBar>
          <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
