import { AppBar, Typography, InputBase, Badge, Avatar, Menu, MenuItem, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { AccountBox, Article, Group, Home, Mail, Notifications, Person, Pets, Settings, Store } from '@mui/icons-material';
import { useState } from "react";

import { StyledToolbar, Search, Icons, UserBox } from './styled.components';
import { useThemesContext } from "../../theme/ThemesContextProvider";

const Navbar = () => {
  const [openUser, setOpenUser] = useState(false);
  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography variant="h6" sx={{display:{xs:'none', sm: 'block'}}}>MACEDO DEV</Typography>
          <Pets sx={{display:{xs:'block', sm: 'none'}}} onClick={() => setOpenSidebarMobile(true)}/>
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
              onClick={() => setOpenUser(!openUser)}
            />
          </Icons>
          <UserBox
            onClick={() => setOpenUser(!openUser)}
          >
            <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <Typography variant="span">John</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          disableScrollLock
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-menu"
          open={openUser}
          onClose={() => setOpenUser(false)}
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

      <Drawer
      anchor="left"
      open={openSidebarMobile}
      onClose={() => setOpenSidebarMobile(false)}
      >
        <SidebarMobile onClose={() => setOpenSidebarMobile(false)} />
      </Drawer>
    </>
  )
}

const SidebarMobile = ({ onClose }) => {
  const { mode, toggleThemeMode } = useThemesContext();

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary='Homepage' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Article /></ListItemIcon>
            <ListItemText primary='Pages' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Group /></ListItemIcon>
            <ListItemText primary='Groups' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Store /></ListItemIcon>
            <ListItemText primary='Marketplace' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Person /></ListItemIcon>
            <ListItemText primary='Friends' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><AccountBox /></ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Switch
              checked={mode === 'dark'}
              onClick={toggleThemeMode}
            />
            <ListItemText primary='UI Mode' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};


export default Navbar;
