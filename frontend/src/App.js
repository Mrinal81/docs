import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import DoctorList from './components/DoctorList';
import axios from 'axios';
import './App.css';






const App = () => {
  const [doctors, setDoctors] = useState([]);


  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);
  console.log('Doctors:', doctors);


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CategoryList
              categories={['Cardiologist', 'Dermatologist', 'Gynecologist']}
            />
          }
        />
        {['Cardiologist', 'Dermatologist', 'Gynecologist'].map(category => (
          <Route
            key={category}
            path={`/doctors/${category.toLowerCase()}`}
            element={<DoctorList doctors={doctors.filter(doctor => doctor.role === category)} />}
          />
        ))}
      </Routes>
    </Router>
  );
};


export default App;
