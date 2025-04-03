import { AccountBox, Group, Home, Article, Person,  Settings, Store, ModeNight } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Switch } from '@mui/material';
import { useThemesContext } from '../../theme/ThemesContextProvider';


const Sidebar = () => {
  const { toggleThemeMode } = useThemesContext();

  return (
    <Box  flex={1} p={2} sx={{display: {xs: 'none', sm: 'block'}, minWidth: '170px'}}>
      <Box position='fixed'>
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
              <Switch onClick={toggleThemeMode}/>
              <ListItemText primary='UI Mode' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar;
