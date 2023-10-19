import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/navbar.js';

function Home() {
  return (
    <div>
        <Navbar/>
      Home page
      <Link to="/student" className='btn btn-success'>Student</Link>
    </div>
  );
}

export default Home;