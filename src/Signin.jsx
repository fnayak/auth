import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from './authSlice';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import Cookies from 'js-cookie'

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigage = useNavigate();
    const dispatch = useDispatch();

    const handleSignin = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8091/signin', { email, password });
            setLoading(false);
            toast.success('Signin successful');
            Cookies.set('token', response.data.token, { expires: 7 });
            localStorage.setItem("token", response.data.token);
            //dispatch(loginSuccess({user: response.data.user, token: response.data.token}));
            navigage('/dashboard');
        } catch (error) {
            setLoading(false);
            toast.error('Signin failed');
            console.log("Signin failed", error);
        }

    }
  return (
    <div>
        <h3>Signin</h3>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value) } placeholder='Email' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button onClick={handleSignin} disabled={loading}>
        {loading ? <Spinner /> : 'Signin'}
        
        </button>
    </div>
  )
}

export default Signin