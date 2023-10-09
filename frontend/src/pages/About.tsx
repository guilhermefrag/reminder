import { Container, Typography, Paper, Grid } from '@mui/material';

export default function About() {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                About Reminder App
            </Typography>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="body1" paragraph>
                    Reminder App is a user-friendly application designed to help you stay organized and never forget important tasks or events again. With our app, you can easily jot down notes, set reminders, and receive timely notifications to keep you on track.
                </Typography>
                <Typography variant="body1" paragraph>
                    Key benefits of using Reminder App:
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">
                            <strong>1. Stay Organized:</strong> Keep all your important notes and reminders in one place for easy access.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">
                            <strong>2. Never Miss an Event:</strong> Set reminders for appointments, meetings, birthdays, and more to receive timely alerts.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">
                            <strong>3. Increased Productivity:</strong> Reduce the chances of forgetting important tasks, leading to increased productivity.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2">
                            <strong>4. User-Friendly Interface:</strong> Our app is designed with simplicity in mind, making it easy for anyone to use.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
