import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import './LoginsStyles.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://epic-event-backend.onrender.com/auth/signup', {
                email,
                username,
                password1,
                password2,
                role
            });

            if (response.status === 200) {
                setSuccess("Account created successfully!");
                setError("");

                const user = { email, username, password: password1 }; // Store the email, username, and password
                localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage

                navigate("/dashboard"); // Redirect to the dashboard page
            } else {
                setError("Signup failed. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
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
            navigate("/dashboard");
        } catch (error) {
            setError("Failed to sign up with Google. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <div className="form">
                <h2>Sign Up</h2>
                <button><i className="bi bi-box-arrow-in-left " style={{color: "red"}}><a href="/">return</a></i></button>
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
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-span">
                        <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            required
                        />
                    </div>
                    <label for="role">Select your role:</label>
                    <select id="role" name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
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
