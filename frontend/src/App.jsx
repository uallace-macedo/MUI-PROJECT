import Navbar from './components/navbar'
import Sidebar from './components/sidebar';
import Feed from './components/feed';
import RightBar from './components/rightbar';

import { Box, Stack } from '@mui/material';

function App() {

  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent="space-betwween">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  )
}

export default App
