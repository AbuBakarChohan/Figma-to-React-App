import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';




function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
     
    </div>
  );
}

export default App;
