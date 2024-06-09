import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { CircularProgress, Container, IconButton  } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const BannedStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBannedStudents();
  }, []);
  const handleViewDetails = (studentId) => {
    console.log('View details of student with ID:', studentId);
  };
  const fetchBannedStudents = async () => {
    const token = localStorage.getItem('token'); 

    if (!token) {
      console.error('No token found in local storage');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://tutor-mern-server.onrender.com/api/v1/admin/banned-students', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setStudents(result.data);
        } else {
          console.error('Failed to fetch banned students');
        }
      } else {
        console.error('Failed to fetch banned students', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      name: 'profile',
      label: 'Profile Image',
      options: {
        filter: false,
        customBodyRender: (value) => (
          <img src={value} alt="Profile" style={{ width: 50, height: 50, borderRadius: '50%' }} />
        )
      }
    },
    { name: 'fullName', label: 'Full Name' },
    { name: 'username', label: 'Username' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Phone' },
    { name: 'school', label: 'School' },
    { name: 'country', label: 'Country' },
    {
      name: 'view',
      label: 'View',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <IconButton onClick={() => handleViewDetails(students[tableMeta.rowIndex]._id)}>
            <VisibilityIcon />
          </IconButton>
        )
      }
    }
  ];

  const options = {
    filter: false, 
    selectableRows: 'none',
    responsive: 'standard',
    customSearch: function(searchQuery, currentRow, columns) {
      // Implement your custom search logic here
      return true; // Always return true to avoid filtering
    }
  };

  return (
    <Container maxWidth="md">
      <h1>Banned Students</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        <MUIDataTable
          title="Banned Students List"
          data={students}
          columns={columns}
          options={options}
        />
      )}
    </Container>
  );
};

export default BannedStudents;