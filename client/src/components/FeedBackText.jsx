import React, { useState } from 'react';
import {
  Button,
  Typography,
  Stack,
  Grid,
  Divider,
  linearProgressClasses,
  LinearProgress,
  styled,
} from '@mui/material';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '0.9rem',
  width: '16rem',
  borderradius: '100rem',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#4B4A4A',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderradius: 5,
    backgroundColor: '#F4D35E',
  },
}));

function FeedBackText({ feedBackName, percentFeedBack }) {
  const [evalInfo, setEvalInfo] = useState('');

  const evalButtonInfoClick = () => {
    if (evalInfo === '') {
      setEvalInfo('#FFF8E1');
    } else {
      setEvalInfo('');
    }
  };

  return (
    <>
      <Button
        sx={{ borderradius: '100rem' }}
        style={{ width: '100%' }}
        onClick={evalButtonInfoClick}
      >
        {/* <Stack 
              width="100%"
              direction="horizontal" 
              justifycontent="space-between"
              alignitems="center"
              spacing={2}        
              > */}
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Typography
              padding='0.32rem'
              color='#F4D35E'
              fontFamily='sans-serif'
              fontSize='1.8rem'
              sx={{ letterSpacing: '0.0625rem', textTransform: 'none' }}
            >
              {' '}
              {feedBackName}{' '}
            </Typography>
          </Grid>
          <Grid item>
            <StyledLinearProgress
              value={percentFeedBack}
              variant='determinate'
              sx={{ borderRadius: '10rem' }}
            ></StyledLinearProgress>
          </Grid>
        </Grid>
        {/* </Stack> */}
      </Button>
      <Typography
        padding='0.35rem'
        color='#B6AFAF'
        fontFamily='sans-serif'
        fontSize='1.2rem'
        sx={{ letterSpacing: '0.0625rem', textTransform: 'none' }}
      >
        {' '}
        {evalInfo}{' '}
      </Typography>
      <Divider
        sx={{
          backgroundColor: '#605C5C',
          width: '35rem',
          borderBottomWidth: '0.0625rem',
        }}
      ></Divider>
    </>
  );
}

export default FeedBackText;
