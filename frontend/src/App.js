import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import DoctorList from './components/DoctorList';
import axios from 'axios';
import './App.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

// Function to fetch doctors
const fetchDoctors = async () => {
  try {
    const response = await axios.get(`${backendUrl}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
};

const App = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const doctorsData = await fetchDoctors();
      setDoctors(doctorsData);
    };

    fetchData();
  }, []);

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
