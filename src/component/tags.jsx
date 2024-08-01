import { useState } from 'react';
import { Grid, Typography, Tabs, Tab, Box, Divider } from '@mui/material';


function Tags() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue); 
    };
    return (
        <Grid item xs={12} md={8}>
          <Box mt={3}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              <Tab label="Posts" />
              <Tab label="Settings" />
              <Tab label="Activity" />
            </Tabs>
            <Divider />
            <Box p={3}>
              {value === 0 && (
                <Typography variant="body1">
                  This is where posts content would be displayed.
                </Typography>
              )}
              {value === 1 && (
                <Typography variant="body1">
                  This is where settings content would be displayed.
                </Typography>
              )}
              {value === 2 && (
                <Typography variant="body1">
                  This is where activity content would be displayed.
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
    )
}

export default Tags;