import React, { useState } from 'react';
import { Grid } from '@mui/material';
import RecordingBox from '../components/RecordingBox';
import ChooseFeatures from '../components/ChooseFeatures';
import TextBox from '../components/TextBox';
import ContentContext from '../contexts/ContentContext';

function ProjectPage() {
  const [contentUp, setContentUp] = useState(true);
  const [eyeUp, setEyeUp] = useState(true);
  const [voiceUp, setVoiceUp] = useState(true);
  const [changeButts, setChangeButts] = useState(true);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <ContentContext.Provider
      value={{
        contentValues: [contentUp, setContentUp],
        eyeValues: [eyeUp, setEyeUp],
        voiceValues: [voiceUp, setVoiceUp],
        buttonValues: [changeButts, setChangeButts],
      }}
    >
      <Grid container flexGrow xs={12} minHeight='100vh' bgcolor='#312F2F'>
        <Grid item xs={6} padding='3rem'>
          <TextBox isRecording={isRecording} />
        </Grid>
        <Grid
          item
          xs={6}
          container
          paddingRight='3rem'
          py='3rem'
          justifycontent='center'
          alignContent='center'
        >
          <ChooseFeatures />

          <Grid
            item
            container
            height='85%'
            marginTop='1.5rem'
            borderRadius='1rem'
            justifyContent='center'
            alignContent='center'
            backgroundColor='#272626'
          >
            <Grid item>
              <RecordingBox setIsRecording={setIsRecording} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ContentContext.Provider>
  );
}

export default ProjectPage;
