import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/login', {email, password}, {withCredentials: true});
            navigate('/dashboard');
        } catch (error) {
            setError('Invalid Credentials');
        }
    }


    return (
        <div>
            <h2>Login Page</h2>
            {error && <p className="login_error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input_container">
                    <label htmlFor="email_inp">Email</label>
                    <input type="email" value={email} id="email_inp" onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className="input_container">
                    <label htmlFor="password_inp">Password</label>
                    <input type="password" value={password} id="password_inp" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;