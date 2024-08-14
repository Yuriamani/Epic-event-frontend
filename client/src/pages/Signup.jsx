import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import './LoginsStyles.css'; // Ensure path is correct

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Validate passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('https://epic-event-backend.onrender.com/users/users', {
                email,
                username,
                password
            });

            setSuccess("Account created successfully!");
            setError("");
            // Redirect to login page or other appropriate action
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError("An error occurred. Please try again.");
            }
            setSuccess("");
        }
    };

    const handleGoogleSignUp = async (response) => {
        try {
            const { credential } = response;
            await axios.post('https://epic-event-backend.onrender.com/auth/google', {
                tokenId: credential
            });

            // Handle response from backend after Google authentication
            navigate("/login");
        } catch (error) {
            setError("Failed to sign up with Google. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <div className="form">
                <h2>Sign Up</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
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
                        <label htmlFor="password" className="label">Create Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        Already have an account? <a href="/login">Log in</a>
                    </div>
                </form>
                <div className="google-signup">
                    <h3>Or sign up with Google</h3>
                    <GoogleLogin
                        onSuccess={handleGoogleSignUp}
                        onFailure={(error) => setError("Google sign-up failed")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
