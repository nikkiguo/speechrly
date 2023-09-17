import React, { useState, useContext } from 'react';
import { ToggleButton } from '@mui/material';

import ContentContext from '../contexts/ContentContext';

function ChooseButton({featureName}) {

  const {contentValues, eyeValues, voiceValues, buttonValues} = useContext(ContentContext);
  const [contentUp, setContentUp] = contentValues;
  const [eyeUp, setEyeUp] = eyeValues;
  const [voiceUp, setVoiceUp] = voiceValues;
  const [changeButts, setChangeButts] = buttonValues;

  console.log(contentValues[0])

  const [bgColor, setBgColor] = useState("#FFF8E1");
  const [textColor, setTextColor] = useState("#C2A84B");
  const [hoverBgColor, setHoverBgColor] = useState("#f7e7b0");
  const [hoverTextColor, setHoverTextColor] = useState("#cfb559");

  const buttonClick = () => {
    if (changeButts === true) {
      if (bgColor === '#D7BA56') {
        setBgColor('#FFF8E1');
        setTextColor('#C2A84B');
        if (featureName ===  "Content") {
          setContentUp(true)
        } else if (featureName ===  "Eye-contact") {
          setEyeUp(true)
        } else {
          setVoiceUp(true)
        }
      } else {
        setBgColor('#D7BA56');
        setTextColor('#FFECA9');
        if (featureName ===  "Content") {
          setContentUp(false)
        } else if (featureName ===  "Eye-contact") {
          setEyeUp(false)
        } else {
          setVoiceUp(false)
        }
      }
    } else {
      setHoverBgColor({bgColor});
      setHoverTextColor({textColor});
    }
  };

  return (
    <ToggleButton
      sx={{
        fontSize: '1.2rem',
        color: textColor,
        borderRadius: '100rem',
        fontFamily: 'sans-serif',
        textTransform: 'none',
        letterSpacing: '0.0625rem',
        margin: '0.4rem',
        padding: '0.3rem 1.85rem',
        border: 0,
        backgroundColor: bgColor,
        transition: '.3s',
        '&:hover': { backgroundColor: '#f7e7b0', color: '#cfb559' },
      }}
      value='content'
      aria-label='content'
      onClick={buttonClick}
    >
      {featureName}
    </ToggleButton>
  );
}

export default ChooseButton;
