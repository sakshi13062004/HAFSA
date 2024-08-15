import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    role: 'client', // Default role
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to the list
    const newUser = {
      id: existingUsers.length + 1,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      role: formData.role,
      mobile: formData.mobileNumber,
    };

    // Save the updated list in local storage
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

    alert("Successful!");

    // Navigate to Admin Dashboard
    navigate('/admin-dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder='First Name'
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder='Last Name'
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder='Enter e-mail'
      />

      <label htmlFor="mobileNumber">Mobile Number</label>
      <input
        type="text"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        placeholder='Enter Mobile Number'
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder='Password'
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder='Confirm Password'
      />

      <label htmlFor="role">Role</label>
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="client">Client</option>
        <option value="agent">Agent</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
