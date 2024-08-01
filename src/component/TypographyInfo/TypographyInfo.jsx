import React from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const TypographyInfo = ({ label, value, loading }) => (
  <Typography sx={{ mb: 2 }} variant="body2" color="text.secondary" align="left">
    <span style={{ marginRight: 20 }}>{label}:</span>
    {loading ? <Skeleton data-testid="skeleton" /> : value}
  </Typography>
);

export default TypographyInfo;
