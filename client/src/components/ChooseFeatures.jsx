import * as React from 'react';
import ChooseButton from './ChooseButton';
import { Stack, Box } from '@mui/material';

function ChooseFeatures() {
  return (
    <Box
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        bgcolor='#F4D35E'
        borderRadius='100rem'
        width='100%'
        paddingY='1rem'
        verticalAlign='center'
        marginY='1rem'
        display='flex'
        justifyContent='center'
        alignContent='center'
      >
        <Stack direction='horizontal'>
          <p
            style={{
              letterSpacing: '0.0625rem',
              fontFamily: 'sans-serif',
              verticalAlign: 'center',
              fontSize: '1.2rem',
              color: '#97823A',
              display: 'inline',
              paddingRight: '1.5rem',
            }}
          >
            Evaluate:
          </p>
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <ChooseButton featureName='Content' />
            <ChooseButton featureName='Eye-Contact' />
            <ChooseButton featureName='Voice' />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default ChooseFeatures;
