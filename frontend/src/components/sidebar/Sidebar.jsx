import { AccountBox, Group, Home, Article, Person,  Settings, Store, ModeNight } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary='Homepage'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Article /></ListItemIcon>
            <ListItemText primary='Pages'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Group /></ListItemIcon>
            <ListItemText primary='Groups'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Store /></ListItemIcon>
            <ListItemText primary='Marketplace'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Person /></ListItemIcon>
            <ListItemText primary='Friends'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary='Settings'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><AccountBox /></ListItemIcon>
            <ListItemText primary='Profile'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon><ModeNight /></ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar;
