import React, { useState } from 'react';
import { InputBase } from '@mui/material';

function TextBox({ isRecording }) {
  const [text, setText] = useState('');

  const textChange = (event) => {
    if (event.target.value.slice(-1) == '\n') {
      setText(event.target.value + '\n\t○   ');
    } else if (event.target.value.length == 1) {
      setText('\n\t○   ' + event.target.value);
    } else {
      setText(event.target.value);
    }
  };

  return (
    <InputBase
      sx={{
        ml: 1,
        flex: 1,
        color: isRecording ? '#726D6D' : '#B5B5B5',
        fontSize: '1.2rem',
      }}
      placeholder='Write each main point of your speech on a separate bullet point...'
      inputProps={{ 'aria-label': 'main points on separate lines' }}
      multiline
      autoFocus
      maxRows={24}
      fullWidth
      value={text}
      onChange={textChange}
    />
  );
}

export default TextBox;
