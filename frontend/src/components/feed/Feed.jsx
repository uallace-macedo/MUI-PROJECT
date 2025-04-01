import { Box, Stack } from '@mui/material';
import Post from '../post';

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Stack spacing={2}>
        <Post />
        <Post />
        <Post />
        <Post />
      </Stack>
    </Box>
  )
}

export default Feed;
