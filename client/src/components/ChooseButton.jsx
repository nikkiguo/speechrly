import React, { useState, useContext } from 'react';
import { ToggleButton } from '@mui/material';

import ContentContext from '../contexts/ContentContext';

function ChooseButton({ featureName }) {
  const { contentValues, eyeValues, gestureValues, buttonValues } =
    useContext(ContentContext);
  const [, setContentUp] = contentValues;
  const [, setEyeUp] = eyeValues;
  const [, setGestureUp] = gestureValues;
  const [changeButts] = buttonValues;

  console.log(contentValues[0]);

  const [bgColor, setBgColor] = useState('#FFF8E1');
  const [textColor, setTextColor] = useState('#C2A84B');
  const [hoverBgColor, setHoverBgColor] = useState(bgColor);
  const [hoverTextColor, setHoverTextColor] = useState(textColor);

  const buttonClick = () => {
    if (changeButts === true) {
      setHoverBgColor('#f7e7b0');
      setTextColor('#cfb559');
      if (bgColor === '#D7BA56') {
        setBgColor('#FFF8E1');
        setTextColor('#C2A84B');
        if (featureName === 'Content') {
          setContentUp(true);
        } else if (featureName === 'Eye-contact') {
          setEyeUp(true);
        } else {
          setGestureUp(true);
        }
      } else {
        setBgColor('#D7BA56');
        setTextColor('#FFECA9');
        if (featureName === 'Content') {
          setContentUp(false);
        } else if (featureName === 'Eye-contact') {
          setEyeUp(false);
        } else {
          setGestureUp(false);
        }
      }
    } else {
      setHoverBgColor(bgColor);
      setHoverTextColor(textColor);
    }
  };

  return (
    <ToggleButton
      className=''
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
        '&:hover': { backgroundColor: hoverBgColor, color: hoverTextColor },
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
