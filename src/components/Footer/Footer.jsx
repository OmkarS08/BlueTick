import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div id="Footer" className="app">
      <header className="header">
        <h1>Bluetick Consultants LLP</h1>
        <p>contact@bluetickconsultants.com</p>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#Hero">glassdoor</a></li>
          <li><a href="#WhatweOffer">ISO</a></li>
          <li><a href="#Contact">ww 9001:2015</a></li>
        </ul>
      </nav>
      <main className="main">
        <div className="resources">
          <h2>RESOURCES</h2>
          <ul>
            <li><a href="#Blog">Blogs</a></li>
          </ul>
        </div>
        <div className="products">
          <h2>PRODUCTS</h2>
          <ul>
            <li><a href="#Hero">Ⓒ Talk To Code</a></li>
            <li><a href="#Blog">in Q</a></li>
            <li><a href="#WhatweOffer">InterviewGPT</a></li>
            <li><a href="#Contact">PrivacyDoc</a></li>
            <li><a href="#WhatweOffer">Sales Call Evaluator</a></li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 All rights reserved by Bluetick Consultants LLP</p>
      </footer>
    </div>
  );
}

export default Footer