import React, { useEffect, useState } from 'react';

const BannedStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tutor-mern-server.onrender.com/api/v1/admin/banned-students');
        const result = await response.json();
        setStudents(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Banned Students</h1>
      <ul>
        {students && students.length > 0 ? (
          students.map(student => (
            <li key={student._id}>
              <img src={student.profile} alt={student.fullName} width="50" height="50" />
              <p>Name: {student.fullName}</p>
              <p>Username: {student.username}</p>
              <p>Email: {student.email}</p>
              <p>Phone: {student.phone}</p>
              <p>School: {student.school}</p>
              <p>Class: {student.studentClass}</p>
              <p>Country: {student.country}</p>
              <p>Role: {student.role}</p>
              <p>Banned: {student.isBanned ? 'Yes' : 'No'}</p>
            </li>
          ))
        ) : (
          <p>No banned students found.</p>
        )}
      </ul>
    </div>
  );
};

export default BannedStudents;
