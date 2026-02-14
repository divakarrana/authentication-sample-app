import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/dashboard', {withCredentials: true})
        .then(res => {
            setMessage(res.data.message);
        }).catch(() => {
            navigate("/");
        })
    },[navigate]);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3000/logout', {}, {withCredentials: true});
            navigate("/");
        } catch (error) {
            console.log('Logout failed', error);
            navigate('/');
        }
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{message}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Dashboard;