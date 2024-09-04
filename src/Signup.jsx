import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = axios.post('http://localhost:8091/signup', { email, password });
            navigate('/signin');
        } catch (error) {
            console.error("Signup failed", error);

        }

    }

    return (
        <div>
            <h2>Signup</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" />
            <button onClick={handleSignup}>Signup</button>
        </div>
    )
}

export default Signup