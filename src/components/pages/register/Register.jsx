import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../ui/form/form.module.css';

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const password = watch('password');

  const onSubmit = (data) => {
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    registeredUsers.push(data);
    localStorage.setItem('users', JSON.stringify(registeredUsers));
    navigate('/signin');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2>Sign Up</h2>
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

        <label htmlFor="username">Username</label>
        <input
          {...register('username', {
            required: 'Username is required',
            pattern: {
              value: /^[A-Za-z0-9_-]{2,20}$/,
              message: 'Username can only contain latin letters, numbers, dashes and underscores',
            },
          })}
        />
        {errors.username && <p className={styles.error}>{errors.username.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value:
                /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
              message:
                'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character and be at least 8 characters long',
            },
          })}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

        <label htmlFor="repeatpassword">Repeat password</label>
        <input
          {...register('repeatpassword', {
            validate: (value) => value === password || 'The passwords do not match',
          })}
        />
        {errors.repeatpassword && <p className={styles.error}>{errors.repeatpassword.message}</p>}

        <button type="submit">Sign up</button>

        <p>
          Already have an account?{' '}
          <b>
            <Link to="/signin">Sign in</Link>
          </b>
        </p>
      </form>
    </div>
  );
};

export default Register;
