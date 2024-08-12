import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginsStyles.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username && !email || !password) {
            setError('Please provide username or email, and password.');
            return;
        }

        try {
            const response = await fetch('https://epic-event-backend.onrender.com/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                navigate('/events');
            } else if (response.status === 401) {
                setError('Invalid username, email, or password. Please try again.');
            } else if (response.status === 404) {
                setError('User not found. Please sign up first.');
            } else {
                const errorText = await response.text();
                setError(`An error occurred: ${errorText}`);
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-span">
                    <label htmlFor="username" className="label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
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
                        required
                    />
                </div>
                <button type="submit" className="submit">Login</button>
                {error && <div className="error-message">{error}</div>}
                <div className="span">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </div>
            </form>
        </div>
    );
};

export default Login;


