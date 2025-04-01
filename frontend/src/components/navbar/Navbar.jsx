import { AppBar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import { Mail, Notifications, Pets } from '@mui/icons-material';
import { useState } from "react";

import { StyledToolbar, Search, Icons, UserBox } from './styled.components';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:'none', sm: 'block'}}}>MACEDO DEV</Typography>
        <Pets sx={{display:{xs:'block', sm: 'none'}}}/>
        <Search>
          <InputBase placeholder="Search..."/>
        </Search>
        <Icons>
          <Badge badgeContent={5} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={3} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{width:30, height:30}}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={() => setOpen(!open)}
          />
        </Icons>
        <UserBox
          onClick={() => setOpen(!open)}
        >
          <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-menu"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;
