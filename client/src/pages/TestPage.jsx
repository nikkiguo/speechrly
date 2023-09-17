import React from 'react';
import { Grid, Stack, Button} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChooseFeatures from '../components/ChooseFeatures';
import EvalStats from '../components/EvalStats';

function TestPage() {
  
  return (

    <Grid container flexGrow xs={12} minHeight='100vh' bgcolor='#312F2F'>
      <Grid item xs={6} padding='3rem'></Grid>

        
      <Grid
        item
        container
        xs={6}
        paddingRight='3rem'
        py='3rem'
        justifycontent='center'
        alignContent='center'
      >

        <ChooseFeatures/>

        <Grid
          item
          container
          height='85%'
          marginTop="1.5rem"
          borderradius='1rem'
          justifycontent='center'
          alignContent='top'
          backgroundColor='#272626'
        >
          
        
          <Stack
            marginY="2.8rem"
            height="85%"
            direction="column" 
            justifycontent="space-between"
            spacing={2}
          >
            <Grid item>
              <EvalStats/>
            </Grid>

              <Button startIcon={<RefreshIcon style={{fontSize: "2.2rem"}}/>} sx={{fontFamily: "sans-serif", textTransform: 'none', fontSize: "1.8rem", color: "#B0ABAB", letterSpacing: "0.0625rem", '&:hover': { backgroundColor: "#272626", color: "#e6e1e1"}}}>
                Record again
              </Button>  
          </Stack>
        </Grid>
      </Grid>
    </Grid>
    );
}

export default TestPage;
