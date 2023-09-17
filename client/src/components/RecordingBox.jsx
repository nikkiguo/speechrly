import React, { useState, useContext } from 'react';
import { Button, Box, Stack } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import WbIncandescentRoundedIcon from '@mui/icons-material/WbIncandescentRounded';
import { ReactMic } from 'react-mic';
import ContentContext from '../contexts/ContentContext';

function RecordingBox() {
  const [record, setRecord] = useState(false);
  const [myAudioSrc, setMyAudioSrc] = useState(null);
  const [buttonStatus, setButtonStatus] = useState(0);
  const {buttonValues} = useContext(ContentContext);
  const [changeButts, setChangeButts] = buttonValues;

  const texts = ['Start recording', 'Stop recording', 'Evaluate'];
  const icons = [
    <PlayArrowRoundedIcon fontSize='large' />,
    <StopRoundedIcon fontSize='large' />,
    <WbIncandescentRoundedIcon fontSize='large' />,
  ];

  const buttonClick = () => {
    if (buttonStatus === 0) {
      setRecord(true);
      setButtonStatus(1);
      setChangeButts(false);
      
    } else if (buttonStatus === 1) {
      setRecord(false);
      setButtonStatus(2);
      setChangeButts(true);
    } else if (buttonStatus === 2) {
    }
  };

  const onStop = (recordedBlob) => {
    const url = URL.createObjectURL(recordedBlob.blob);
    setMyAudioSrc(url);
  };
  return (
    <Stack justifycontent='center' alignItems='center' width='100%' spacing={5}>
      <Box display={buttonStatus === 1 ? 'block' : 'none'}>
        <ReactMic
          record={record}
          className='sound-wave'
          onStop={onStop}
          mimeType='audio/webm'
          strokeColor='#F76C5E'
          backgroundColor='#272626'
        />
      </Box>

      <Box
        display={buttonStatus === 2 ? 'flex' : 'none'}
        justifycontent='center'
        alignitems='center'
      >
        <audio controls id='myAudio' src={myAudioSrc}></audio>
      </Box>

      <Box display='flex' justifycontent='center'>
        <Button
          sx={{
            textTransform: 'none',
            padding: '1rem 2rem',
            fontSize: '1.5rem',
            color: '#010101',
            borderradius: '1rem',
            backgroundColor: buttonStatus === 1 ? '#F76C5E' : '#F4D35E',
            transition: '.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundColor: buttonStatus === 1 ? '#F76C5E' : '#F4D35E',
            },
          }}
          onClick={buttonClick}
          variant='contained'
          justifycontent='center'
          alignitems='center'
          startIcon={
            <Box display='flex' justifycontent='center' alignItems='center'>
              {icons[buttonStatus]}
            </Box>
          }
        >
          {texts[buttonStatus]}
        </Button>
      </Box>
    </Stack>
  );
}

export default RecordingBox;
