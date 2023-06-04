import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <NavBar/>
    <HomePage/>
    <WorkExperience/>
    <Projects/>
    <Footer/>
    </div>
  );
}

export default App;
