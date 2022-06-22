import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import "./LoginUser.css";

export default function LoginUser() {

  const history = useHistory();

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const authDb = getAuth();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {

    signOut(authDb).then(() => {
        // Sign-out successful.
                  }).catch((error) => {
                  // An error happened.
                  })

    handleClose();

    history.push('/admin');

  }

  const mnuList = () => {

    if(authDb.currentUser) {

      return (

        <>
        
          <Link to="/datoPlan" ><MenuItem onClick={handleClose}><div className="loginContent__menuItem">Info de Plan</div></MenuItem></Link>

          <MenuItem onClick={logOut}>Cerrar Sesion</MenuItem>

        </>

      )

    }

  }

    return (

        <div>

          <Box sx={{ flexGrow: 1 }}>
            <div className="loginContent">
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {!authDb.currentUser ? <Link to='/admin'><MenuItem onClick={handleClose}><div className="loginContent__menuItem">Conectarse</div></MenuItem></Link> : null} 

                {mnuList()} 
                
                {/* {authDb.currentUser ? <MenuItem onClick={logOut}>Cerrar Sesion</MenuItem> : null} */}

              </Menu>
            </div>
          </Box>

        </div>

    )

}