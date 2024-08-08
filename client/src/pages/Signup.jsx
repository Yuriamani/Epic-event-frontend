
import './LoginsStyles.css'


const Signup = () => {
    return (
        <div className="form-container">
            <div className="form">
                <h2>Sign Up</h2>
                <div className="name-fields">
                    <div className="input-span">
                        <label htmlFor="firstName" className="label">First Name</label>
                        <input type="text" id="firstName" name="firstName" />
                    </div>
                    <div className="input-span">
                        <label htmlFor="lastName" className="label">Last Name</label>
                        <input type="text" id="lastName" name="lastName" />
                    </div>
                </div>
                <div className="input-span">
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="input-span">
                    <label htmlFor="activity" className="label">Activity</label>
                    <select id="activity" name="activity">
                        <option value="post-event">Post Event</option>
                        {/* Add other options as needed */}
                    </select>
                </div>
                <div className="input-span">
                    <label htmlFor="password" className="label">Create Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="input-span">
                    <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" />
                </div>
                <button className="submit">Create Account</button>
                <div className="span">
                    Already have an account? <a href="/">Log in</a>
                </div>
            </div>
        </div>
    )
}

export default Signup
