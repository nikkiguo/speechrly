import React from 'react';
import { Grid } from '@mui/material';
import RecordingBox from '../components/RecordingBox';

function ProjectPage() {
  return (
    <Grid container flexGrow xs={12} height='100vh' bgcolor='#312F2F'>
      <Grid item xs={6} padding='3rem'></Grid>
      <Grid
        item
        container
        xs={6}
        paddingRight='3rem'
        py='3rem'
        justifyContent='center'
        alignContent='center'
      >
        <Grid
          item
          container
          height='100%'
          borderRadius='1rem'
          justifyContent='center'
          alignContent='center'
          backgroundColor='#272626'
        >
          <RecordingBox />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectPage;