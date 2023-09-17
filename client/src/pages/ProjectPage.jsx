import React, { useState } from 'react';
import { Grid } from '@mui/material';
import RecordingBox from '../components/RecordingBox';
import ChooseFeatures from '../components/ChooseFeatures';
import TextBox from '../components/TextBox';

function ProjectPage() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <Grid container flexGrow minHeight='100vh' bgcolor='#312F2F'>
      <Grid item xs={6} padding='3rem'>
        <TextBox isRecording={isRecording} />
      </Grid>
      <Grid
        item
        container
        xs={6}
        paddingRight='3rem'
        py='3rem'
        justifyContent='center'
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
  );
}

export default ProjectPage;
