import React from 'react';
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
      sx={
        {
          display: {xs: 'none', sm: 'block'},
        }
      }
    >
      <Box position='fixed' >
        <Stack spacing={2} paddingRight={3}>
          <Box display='flex' flexDirection='column' alignItems='flex-start'>
            <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
            <AvatarGroup max={4}>
              <Avatar alt='John' src='https://material-ui.com/static/images/avatar/7.jpg'>J</Avatar>
              <Avatar alt='John' src='https://material-ui.com/static/images/avatar/2.jpg'>O</Avatar>
              <Avatar alt='John' src=''></Avatar>
              <Avatar alt='John' src='https://material-ui.com/static/images/avatar/4.jpg'>N</Avatar>
              <Avatar alt='John' src='https://material-ui.com/static/images/avatar/5.jpg'>N</Avatar>
              <Avatar alt='John' src='https://material-ui.com/static/images/avatar/8.jpg'>N</Avatar>
            </AvatarGroup>
          </Box>
          <Box>
            <Typography variant='h6' fontWeight={100}>Latest Photos</Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
              <ImageListItem>
                <img src='https://material-ui.com/static/images/image-list/breakfast.jpg' />
              </ImageListItem>
              <ImageListItem>
                <img src='https://material-ui.com/static/images/image-list/burgers.jpg' />
              </ImageListItem>
              <ImageListItem>
                <img src='https://material-ui.com/static/images/image-list/breakfast.jpg' />
              </ImageListItem>
            </ImageList>
          </Box>
          <Box>
            <Typography variant='h6' fontWeight={100}>Latest Conversations</Typography>
            <List>
              <ListItem display='flex' alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar src='https://material-ui.com/static/images/avatar/7.jpg' alt='girl'/>
                </ListItemAvatar>
                <ListItemText
                  primary='Alice'
                  secondary={
                    <Box sx={{ overflowWrap: 'break-word' }}>
                      <Typography
                        component='span'
                        variant='body2'
                        sx={{
                          display: 'inline',
                          color: 'text.primary'
                        }}
                      >
                        Alice Connors
                      </Typography>
                      {" — Hey, how's it going? I was just thinking about that funny story you told me the other day. It still cracks me up!"}
                    </Box>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem display='flex' alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar src='https://material-ui.com/static/images/avatar/3.jpg' alt='girl2'/>
                </ListItemAvatar>
                <ListItemText
                  primary='Laura'
                  secondary={
                    <Box sx={{ overflowWrap: 'break-word' }}>
                      <Typography
                        component='span'
                        variant='body2'
                        sx={{
                          display: 'inline',
                          color: 'text.primary'
                        }}
                      >
                        Laura Stenford
                      </Typography>
                      {" — Hey, how's it going? You won't believe the funny story that happened to me today! I have to tell you later."}
                    </Box>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Rightbar;
