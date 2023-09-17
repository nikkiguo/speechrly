import React, { useContext } from 'react';
import FeedBackText from '../components/FeedBackText';
import ContentContext from '../contexts/ContentContext';
import { Grid, Stack, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ContentFeedbackContext from '../contexts/ContentFeedbackContext';

function EvalStats() {
  const { contentValues, eyeValues, gestureValues } =
    useContext(ContentContext);
  const [contentUp, setContentUp] = contentValues;
  const [eyeUp, setEyeUp] = eyeValues;
  const [gestureUp, setGestureUp] = gestureValues;
  const [contentFeedback, setContentFeedback] = useContext(
    ContentFeedbackContext
  );

  var cont;
  var eye;
  var vc;

  const evalStats = () => {
    contentUp === true
      ? (cont = (
          <FeedBackText
            feedBackName='Content'
            percentFeedBack='50'
            evalSolidInfo={contentFeedback}
          />
        ))
      : (cont = '');

    eyeUp === true
      ? (eye = (
          <FeedBackText
            feedBackName='Eye-contact'
            percentFeedBack='69'
            evalSolidInfo='eye info'
          />
        ))
      : (eye = '');

    gestureUp === true
      ? (vc = (
          <FeedBackText
            feedBackName='Gestures'
            percentFeedBack='84'
            evalSolidInfo='gestures info'
          />
        ))
      : (vc = '');
  };

  evalStats();
  return (
    <Stack
      marginY='2rem'
      height='20rem'
      direction='column'
      justifyContent='space-between'
      spacing={2}
    >
      <Grid item>
        {cont}
        {eye}
        {vc}
      </Grid>

      <Button
        startIcon={<RefreshIcon style={{ fontSize: '2.2rem' }} />}
        sx={{
          fontFamily: 'sans-serif',
          textTransform: 'none',
          fontSize: '1.8rem',
          color: '#B0ABAB',
          letterSpacing: '0.0625rem',
          '&:hover': { backgroundColor: '#272626', color: '#e6e1e1' },
        }}
      >
        Record again
      </Button>
    </Stack>
  );
}

export default EvalStats;
