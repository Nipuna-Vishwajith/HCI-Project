import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function UpdateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Ensure the payload is in the correct format
    const data = {
      name: name,
      email: email,
    };

    console.log('Updating student with data:', data); // Add this for debugging

    axios
      .put(`http://localhost:8081/update/${id}`, data)
      .then((res) => {
        console.log('Update response:', res); // Add this for debugging
        navigate('/');
      })
      .catch((err) => {
        console.log('Update error:', err); // Add this for debugging
      });
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className='btn btn-success' type='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
