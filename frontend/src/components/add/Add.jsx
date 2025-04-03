import React from 'react';
import { Box, Fab, Modal, Tooltip, Typography, Stack, styled, TextField, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { ModalStyle } from './styles';

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip title='Add' arrow
        sx={
          {
            position: 'fixed', bottom: 20,
            left: 30,
            '@media (min-width: 0px) and (max-width: 425px)': {
              left: 'calc(50% - 25px)'
            }
          }
        }
      >
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        disableScrollLock
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={ModalStyle} bgcolor={'background.default'} color={'text.primary'}>
          <Stack gap={2}>
            <Typography id='modal-modal-title' color='gray' variant='h6' component='h2'>
              Create Post
            </Typography>
            <Stack
              gap={3}
            >
              <TextField
                placeholder='Title'
                variant='standard'
                sx={{ color: 'lime' }}
              />

              <TextField
                multiline
                rows={3}
                placeholder='Post'
                variant='standard'
              />
            </Stack>
            <Button
              variant='contained'
            >
              Send Post
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}

export default Add;
