import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const { name, email, password, confirm_password } = formData;

  const onChange = event => setFormData({
    ...formData, [event.target.name]: event.target.value
  });

  const onSubmit = event => {
    event.preventDefault();
    if (password !== confirm_password) {
      console.log('Password does not match');
    }else{
      console.log(formData);
    }
  };

  return (
    <section className="container wrapper">
      <h1 className="large text-primary">
        Sign Up
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i>Create Your Account
      </p>
      <form className="form" onSubmit={event => onSubmit(event)}>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={event => onChange(event)} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            onChange={event => onChange(event)}
            value={email} 
          />
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            minLength="6" 
            onChange={event => onChange(event)}
            value={password} 
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Confirm Password" 
            name="confirm_password" 
            minLength="6"
            onChange={event => onChange(event)} 
            value={confirm_password} 
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  )
}

export default Register;