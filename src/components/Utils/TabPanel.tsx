import { Box, Grid } from '@material-ui/core';
import React from 'react'

export default function TabPanel(props) {
  const { children, value, index, style, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box>
          <Grid container spacing={2} style={style}>
            {children}
          </Grid>
        </Box>
      )}
    </div>
  );
}
