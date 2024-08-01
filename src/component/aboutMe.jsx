import { Grid, Typography, Card, CardContent } from '@mui/material';

function AboutMe({ user }) {
    return (
        <Grid item xs={12} md={8}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Bio
                </Typography>
                <Typography variant="body1" paragraph>
                    {user.bio}
                </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default AboutMe