// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Careers from './Careers';
import Gallery from './Gallery';
import Contact from './Contact';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="careers" element={<Careers/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="contact" element={<Contact/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
