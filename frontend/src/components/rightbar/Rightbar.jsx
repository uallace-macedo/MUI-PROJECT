import { Box } from '@mui/material';

const Rightbar = () => {
  return (
    <Box bgcolor='lightCoral' flex={2} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      <Box position='fixed'>
        Rightbar
      </Box>
    </Box>
  )
}

export default Rightbar;
