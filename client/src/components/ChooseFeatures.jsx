import * as React from 'react';
import ChooseButton from './ChooseButton';
import { Box } from '@mui/material';

function ChooseFeatures() {
    
    return (
        <Box width="100%" display="flex" justifyContent="center" alignItems="center">
            <Box bgcolor="#F4D35E" borderRadius="100rem" paddingX="1.4rem" paddingY="0.5rem">
                <p style={{color: "#97823A", display: "inline", paddingRight: "1rem"}}>Evaluate:</p>
                <ChooseButton featureName="Content" />
                <ChooseButton featureName="Eye-Contact" />
                <ChooseButton featureName="Voice" />
            </Box>
        </Box>

    );
}


export default ChooseFeatures
