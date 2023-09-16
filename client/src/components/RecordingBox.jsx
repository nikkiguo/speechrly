import React from 'react';
import { Button, Box } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

function RecordingBox() {
  return (
    <Button
      variant='rect'
      justifyContent='center'
      alignItems='center'
      startIcon={
        <Box display='flex' justifyContent='center' alignItems='center'>
          <PlayArrowRoundedIcon fontSize='large' />
        </Box>
      }
    >
      Start recording
    </Button>
  );
}

export default RecordingBox;
