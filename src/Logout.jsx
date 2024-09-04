import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Logout = () => {

    const navigage = useNavigate();
    const token = Cookies.get("token");
    const handleLogout = async () => {
        try {
            const response = await axios.post("http://localhost:8091/logout", {} , {
            headers: {
                "Authorization" : `${token}`
            }
        });

        Cookies.remove(token);
        localStorage.removeItem("token");
        navigage('/signin')

    } catch(error) {
        console.log("Logout failed", error);
        
    }


    }

  return (
    <div><button onClick={handleLogout}>Logout</button></div>
  )
}

export default Logout