import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../../ui/form/form.module.css';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    if (!user || data.email !== user.email) {
      setErrorMessage('User with this email does not exist');
    } else if (!user || data.password !== user.password) {
      setErrorMessage('Incorrect password');
    } else if (user && data.email === user.email && data.password === user.password) {
      localStorage.setItem('isLoggedIn', 'true');
      setErrorMessage('');
      navigate('/');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2>Sign In</h2>
        <label htmlFor="email">Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
              message: 'Email is not valid',
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          {...register('password', {
            required: 'Password is required',
          })}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <button type="submit">Sign in</button>

        <p>
          No account yet?{' '}
          <b>
            <Link to="/signup">Sign up</Link>
          </b>
        </p>
      </form>
    </div>
  );
};

export default Login;
