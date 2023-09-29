import React, { useState } from 'react';
import {
  Button,
  Box,
  Typography,
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

function FeedBackText({ feedBackName, percentFeedBack, evalSolidInfo }) {
  const [evalInfo, setEvalInfo] = useState('');

  const evalButtonInfoClick = () => {
    if (evalInfo === '') {
      setEvalInfo(evalSolidInfo);
    } else {
      setEvalInfo('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginX: '8rem',
      }}
    >
      <Button
        sx={{ paddingY: '1.5rem', paddingX: '0rem' }}
        onClick={evalButtonInfoClick}
      >
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Typography
              color='#F4D35E'
              fontFamily='sans-serif'
              fontSize='1.8rem'
              sx={{
                letterSpacing: '0.0625rem',
                textTransform: 'none',
              }}
            >
              {feedBackName}
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
      </Button>
      {evalInfo ? (
        <Typography
          color='#B6AFAF'
          fontFamily='sans-serif'
          fontSize='1.2rem'
          paddingBottom='1.5rem'
          sx={{ letterSpacing: '0.0625rem', textTransform: 'none' }}
        >
          {evalInfo}
        </Typography>
      ) : null}
      <Divider
        sx={{
          backgroundColor: '#605C5C',
          width: '35rem',
          borderBottomWidth: '0.0625rem',
        }}
      ></Divider>
    </Box>
  );
}

export default FeedBackText;
