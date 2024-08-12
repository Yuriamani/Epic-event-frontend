// src/pages/Login.jsx
import './LoginsStyles.css'; // Ensure path is correct

const Login = () => {
    return (
        <div className="form">
            <h2>Login</h2>
            <div className="input-span">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className="input-span">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <button className="submit">Login</button>
            <div className="span">
                Don't have an account? <a href="/signup">Sign Up</a>
            </div>
        </div>
    );
};

export default Login;
