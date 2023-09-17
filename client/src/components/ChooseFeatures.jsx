import * as React from 'react';
import ChooseButton from './ChooseButton';
import { Stack, Box } from '@mui/material';

function ChooseFeatures({page}) {

    return (
        <Box width="100%" display="flex" justifyContent="center" alignItems="center">

            <Box bgcolor="#F4D35E" borderRadius="100rem" paddingX="2rem" paddingY="0.5rem" verticalalign="center" marginY="1rem">
                <Stack direction="horizontal">
                    <p style={{letterSpacing: "0.0625rem", fontFamily: 'sans-serif', verticalalign: "center", fontSize: "1.5rem", color: "#97823A", display: "inline", paddingRight: "1.5rem", paddingY: "0rem"}}>
                        Evaluate:
                    </p>
                    <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                        <ChooseButton pagey={page} featureName="Content" />
                        <ChooseButton pagey={page} featureName="Eye-contact" />
                        <ChooseButton pagey={page} featureName="Voice" />
                    </Box>
                </Stack>
            </Box>
        </Box>        

    );
}


export default ChooseFeatures
