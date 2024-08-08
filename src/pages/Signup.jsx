import { useState } from 'react';
import './LoginsStyles.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(''); // State to handle success/error messages

    const handleSignup = async (event) => {
        event.preventDefault();

        // Create the payload with the required fields
        const payload = {
            username,
            email,
            password_hash: confirmPassword,  // Send confirmPassword as password_hash
        };

        try {
            const response = await fetch('https://epic-event-backend.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const responseData = await response.json();
            console.log('Response status:', response.status);
            console.log('Response data:', responseData);

            if (response.ok) {
                setMessage('Account created successfully!'); // Set success message
            } else {
                throw new Error(responseData.error || 'Failed to create an account');
            }

        } catch (error) {
            console.error('Error:', error);
            setMessage(`Error: ${error.message}`); // Set error message
        }
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                {message && <div className={`message ${message.startsWith('Error') ? 'error' : 'success'}`}>{message}</div>}
                <div className="input-span">
                    <label htmlFor="username" className="label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
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
                        required
                    />
                </div>
                <div className="input-span">
                    <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit">Create Account</button>
                <div className="span">
                    Already have an account? <a href="/">Log in</a>
                </div>
            </form>
        </div>
    );
}

export default Signup;




