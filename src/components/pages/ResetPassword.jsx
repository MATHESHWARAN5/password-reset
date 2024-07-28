import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import authService from '../services/authService';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { resetToken } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.resetPassword(resetToken, password);
      setMessage(res.data.msg);
    } catch (err) {
      console.error(err);
      setMessage('Error resetting password');
    }
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
