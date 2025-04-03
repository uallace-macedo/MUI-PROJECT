import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert, Share, ShareOutlined } from '@mui/icons-material';

const Post = () => {
  return (
  <Card>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'primary.light' }} aria-label='recipe'>
          J
        </Avatar>
      }
      action={
        <IconButton aria-label='settings'>
          <MoreVert />
        </IconButton>
      }
      title='John'
      subheader='September 14, 2048'
    />

    <CardMedia
      component='img'
      height='20%'
      image='https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      alt='Paella dish'
    />

    <CardContent>
      <Typography variant='body2' color='text.secondary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi inventore itaque recusandae perspiciatis fugiat repellat minima ullam laboriosam doloremque esse quaerat, dignissimos harum, tempora iusto impedit numquam ad possimus.
      </Typography>
    </CardContent>

    <CardActions disableSpacing>
      <IconButton aria-label='add to favorite'>
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }}/>} />
      </IconButton>
      <IconButton aria-label='share'>
        <Checkbox  icon={<ShareOutlined />} checkedIcon={<Share />} />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post;
