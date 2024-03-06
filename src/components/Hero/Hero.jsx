import React from 'react'
import './Hero.css'
import Button from 'react-bootstrap/Button';
const Hero = () => {
  return (

      <div id='Hero' className="header-content">
        <div className="text-content">
          <h2>Welcome to Bluetick Consultancy</h2>
          <p>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a
            significant impact in the Indian and US startup ecosystems.
            Transforming Enterprises
            with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
          <Button variant="primary" size="lg" onClick={() => window.location.href = 'https://www.bluetickconsultants.com/generative-ai.html'}>Explore More</Button>
        </div>
        <div className="image-content">
          <img src="/download.jfif" alt="Consultancy Logo" />
        </div>
      </div>
 
  );
}

export default Hero