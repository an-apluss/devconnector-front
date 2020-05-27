import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="container wrapper">
      <div className="alert alert-danger">
        Invalid Credentials
      </div>
      <h1 className="large text-primary">
        Sign In
      </h1>
      <p className="lead"><i className="fas fa-user"></i>Sign into your account</p>
      <form action="/profiles" className="form">
        <div className="form-group">
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" minlength="6" />
        </div>
        <input type="submit" value="Sign In" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Don't have an account yet? <Link to="/register">Register</Link>
      </p>
    </section>
  )
}

export default Login