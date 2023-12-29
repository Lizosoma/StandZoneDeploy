import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const password = watch('password');
  const onSubmit = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {errors.email && <p>{errors.email.message}</p>}

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
        {errors.username && <p>{errors.username.message}</p>}

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
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="repeatpassword">Repeat password</label>
        <input
          {...register('repeatpassword', {
            validate: (value) => value === password || 'The passwords do not match',
          })}
        />
        {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
        <button type="submit">Sign up</button>
      </form>

      <p>
        Already have an account? <Link to="/signin"> Sign in</Link>
      </p>
    </div>
  );
};

export default Register;
