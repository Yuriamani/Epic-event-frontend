import { useState } from 'react';
import './LoginsStyles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://epic-event-backend.onrender.com/users?email=${email}`);
            const data = await response.json();

            if (data.length > 0) {
                // Assume password checking is handled on the backend or a separate endpoint
                setMessage('Successfully logged in!');
            } else {
                setMessage('User not found. Please sign up first.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="form">
            <h2>Login</h2>
            <div className="input-span">
                <label htmlFor="email" className="label">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-span">
                <label htmlFor="password" className="label">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="submit" onClick={handleLogin}>Login</button>
            {message && <div className="message">{message}</div>}
            <div className="span">Don't have an account? <a href="/signup">Sign Up</a></div>
        </div>
    );
}

export default Login;

