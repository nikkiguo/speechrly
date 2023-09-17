import React from 'react';
import { Grid, Stack, Button} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import EvalStats from '../components/EvalStats';

function EvalBox() {  
  return (
    <Stack
    marginY="2.8rem"
    height="40%"
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
    );
}

export default EvalBox;