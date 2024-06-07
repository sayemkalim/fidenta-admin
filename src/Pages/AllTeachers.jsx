import React, { useEffect, useState } from 'react';
import { Container, Typography, Avatar, Grid, Card, CardContent, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Pagination, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

const TeachersList = () => {
    const [teachers, setTeachers] = useState([]);
    const [page, setPage] = useState(1);
    const teachersPerPage = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tutor-mern-server.onrender.com/api/v1/student/teachers-list');
                const result = await response.json();
                setTeachers(result.data.Teachers);
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };

        fetchData();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const indexOfLastTeacher = page * teachersPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
    const currentTeachers = teachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

    return (
        <Container>
            <Typography variant="h3" gutterBottom>Teachers List</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Profile</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>About</TableCell>
                            <TableCell>Education</TableCell>
                            <TableCell>Time Slots</TableCell>
                            <TableCell>Work</TableCell>
                            <TableCell>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentTeachers.map((teacher) => (
                            <TableRow key={teacher._id}>
                                <TableCell>
                                    <Avatar src={teacher.profile} alt={teacher.fullName} />
                                </TableCell>
                                <TableCell>{teacher.fullName}</TableCell>
                                <TableCell>{teacher.about}</TableCell>
                                <TableCell>
                                    <ul>
                                        {teacher.Education.map((edu) => (
                                            <li key={edu._id}>{`${edu.degree} from ${edu.institute}, Grade: ${edu.grade}, Year: ${edu.year}`}</li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>
                                    <ul>
                                        {teacher.timeSlots.map((slot) => (
                                            <li key={slot._id}>{`Hour: ${slot.hour}, ${slot.isFree ? 'Free' : 'Occupied'}`}</li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>
                                    <ul>
                                        {teacher.workExperience.map((work) => (
                                            <li key={work._id}>{`Title: ${work.title}`}</li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/teacher/${teacher._id}`}color="primary" startIcon={<VisibilityIcon />}>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={Math.ceil(teachers.length / teachersPerPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
                style={{ marginTop: '20px' }}
            />
        </Container>
    );
};

export default TeachersList;
