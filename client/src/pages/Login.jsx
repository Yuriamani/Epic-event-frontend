import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './LoginsStyles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false); // State to manage success message
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false); // Reset success message on new submission

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
                const user = { email: data.email, password };
                
                // Store the user data and user ID in local storage
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('userId', data.user_id); // Store the user ID

                // Show success message
                setSuccess(true);

                // Redirect to the dashboard after a short delay
                setTimeout(() => {
                    navigate('/dashboard/personal-info');
                }, 2000); 
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
            {success && <div className="success">Login successful! Redirecting...</div>} {/* Success message */}
            <button>
                <i className="bi bi-box-arrow-in-left" style={{ color: "red" }}>
                    <a href="/">return</a>
                </i>
            </button>
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
