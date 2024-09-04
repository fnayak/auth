import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logoutSuccess } from './authSlice';

function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutSuccess());
        navigate("/signin")
    }

  return (
    <div>
        <h3>Logout</h3>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard