import { Grid, Typography, Avatar, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function PersonalInfo({ user, setEditForm, setOpen }) {
    const handleClickOpen = () => {
      setEditForm({ ...user });
      setOpen(true);
    };

    return (
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Typography variant="h5" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {user.jobTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2}>
              {user.email}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.phone}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ mt: 2 }}>
              Edit
            </Button>
          </StyledPaper>
        </Grid>
    )
}

export default PersonalInfo;