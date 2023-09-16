import React, { useState } from 'react';
import { ToggleButton } from '@mui/material';

function ChooseButton({ featureName }) {
  const [bgColor, setBgColor] = useState('#D7BA56');
  const [textColor, setTextColor] = useState('#FFECA9');

  const buttonClick = () => {
    if (bgColor === '#D7BA56') {
      setBgColor('#FFF8E1');
      setTextColor('#C2A84B');
    } else {
      setBgColor('#D7BA56');
      setTextColor('#FFECA9');
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
