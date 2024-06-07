import React, { useState, useEffect } from 'react';
import { Container, Avatar, Typography, CircularProgress, Grid, Paper } from '@mui/material';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Teacher() {
 const [teacherData, setTeacherData] = useState(null);
 const { id } = useParams();

    useEffect(() => {
        fetch(`https://tutor-mern-server.onrender.com/api/v1/admin/get-teacher/${id}`)
            .then(response => response.json())
            .then(data => setTeacherData(data.data))
            .catch(error => console.error('Error fetching teacher data:', error));
    }, []);

    return (
        <Container maxWidth="md">
            {teacherData ? (
                <Paper sx={{ p: 2, mb: 2 }}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <Avatar src={teacherData.profile} alt="Profile" sx={{ width: 100, height: 100 }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h4">{teacherData.fullName}</Typography>
                            <Typography variant="body1" gutterBottom>Email: {teacherData.email}</Typography>
                            <Typography variant="body1">Subject: {teacherData.subject}</Typography>
                            {/* Render other data fields as needed */}
                        </Grid>
                    </Grid>
                </Paper>
            ) : (
                <CircularProgress />
            )}
        </Container>
    );
}

export default Teacher;
