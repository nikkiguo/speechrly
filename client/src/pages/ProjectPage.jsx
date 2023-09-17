import React, {useState} from 'react';
import { Grid } from '@mui/material';
import RecordingBox from '../components/RecordingBox';
import ChooseFeatures from '../components/ChooseFeatures';
import ContentContext from '../contexts/ContentContext';

function ProjectPage() {
  const [contentUp, setContentUp] = useState(true);
  const [eyeUp, setEyeUp] = useState(true);
  const [voiceUp, setVoiceUp] = useState(true);
  const [changeButts, setChangeButts] = useState(true);
  return (
    <ContentContext.Provider value={{ contentValues: [contentUp, setContentUp], eyeValues: [eyeUp, setEyeUp], voiceValues: [voiceUp, setVoiceUp], buttonValues: [changeButts, setChangeButts]}}>
    <Grid container minHeight='100vh' bgcolor='#312F2F'>
      <Grid item xs={6} padding='3rem'></Grid>
      <Grid
        item
        xs={6}
        container
        paddingRight='3rem'
        py='3rem'
        justifycontent='center'
        alignContent='center'
      >

          <ChooseFeatures page="choose"/>

        <Grid
          item
          container
          height='85%'
          marginTop="1.5rem"
          borderradius='1rem'
          justifycontent='center'
          alignContent='center'
          backgroundColor='#272626'
        >
          <RecordingBox />
        </Grid>
      </Grid>
    </Grid>
    </ContentContext.Provider>
  );
}

export default ProjectPage;
