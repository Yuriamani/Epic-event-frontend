import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { GoogleLogin } from '@react-oauth/google';
import './LoginsStyles.css'; // Ensure path is correct

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://epic-event-backend.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 200) {
                const data = await response.json();
                const token = data.token; // Assume the token is returned in the response
                localStorage.setItem('token', token); // Store the token
                navigate('/profile'); // Redirect to the profile page
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = (response) => {
        console.log('Google login response:', response);
        // Handle Google login response (e.g., send token to backend)
    };

    return (
        <div className="form">
            <h2>Login</h2>
            {error && <div className="error">{error}</div>}
            <button><i className="bi bi-box-arrow-in-left " style={{color: "red"}}><a href="/">return</a></i></button>
            <form onSubmit={handleSubmit}>
                <div className="input-span">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                <button className="submit" type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <div className="span">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </div>
            </form>
            <div className="google-login">
                <GoogleLogin
                    onSuccess={handleGoogleLogin}
                    onError={error => setError('Google login failed')}
                />
            </div>
        </div>
    );
};

export default Login;
