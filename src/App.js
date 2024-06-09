// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import AllStudents from "./Pages/AllStudent";
import AllTeachers from "./Pages/AllTeachers";
import Teacher from "./Pages/Teacher";
import BannedStudents from "./Pages/BannedStudents";
import Signup from "./Pages/SignUp";
import BannedTeachers from "./Pages/BannedTeachers";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/students" element={<AllStudents/>} />
        <Route path="/teachers" element={<AllTeachers/>} />
        <Route path="/bannedstudents" element={<BannedStudents />} />
        <Route path="/bannedteachers" element={<BannedTeachers />} />

        <Route path="/teacher/:id" element={<Teacher />} />

      </Routes>
      
  
    </Router>
  );
}

export default App;
