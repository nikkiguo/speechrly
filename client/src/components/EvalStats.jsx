import React, { useContext } from 'react';
import FeedBackText from '../components/FeedBackText';
import ContentContext from '../contexts/ContentContext';
import { Stack, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ContentFeedbackContext from '../contexts/ContentFeedbackContext';

function EvalStats() {
  const { contentValues, eyeValues, gestureValues } =
    useContext(ContentContext);
  const [contentUp] = contentValues;
  const [eyeUp] = eyeValues;
  const [gestureUp] = gestureValues;
  const [contentFeedback] = useContext(ContentFeedbackContext);

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
      direction='column'
      justifyContent='space-between'
      alignItems='center'
    >
      {cont}
      {eye}
      {vc}
      <Button
        startIcon={<RefreshIcon style={{ fontSize: '2.2rem' }} />}
        sx={{
          fontFamily: 'sans-serif',
          textTransform: 'none',
          fontSize: '1.8rem',
          color: '#B0ABAB',
          letterSpacing: '0.0625rem',
          marginTop: '2rem',
          padding: '1rem 2rem',
          '&:hover': { backgroundColor: '#272626', color: '#e6e1e1' },
        }}
      >
        Record again
      </Button>
    </Stack>
  );
}

export default EvalStats;
