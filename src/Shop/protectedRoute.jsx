
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ Component }) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.status === 'succeeded');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? <Component /> : null;
}

export default ProtectedRoute;
