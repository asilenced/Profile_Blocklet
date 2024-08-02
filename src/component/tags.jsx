import { useState } from 'react';
import { Grid, Typography, Tabs, Tab, Box, Divider } from '@mui/material';


function Tags() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue); 
    };
    return (
        <Grid item xs={12} md={12}>
          <Box mt={3}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              <Tab label="Arc Block" />
              <Tab label="Work History" />
            </Tabs>
            <Divider />
            <Box p={3}>
              {value === 0 && (
                <Typography variant="body1">
                  Arc Block is a Blockchain Dapp Template.
                </Typography>
              )}
              {value === 1 && (
                <Typography variant="body1">
                  Full Stack Developer
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
    )
}

export default Tags;