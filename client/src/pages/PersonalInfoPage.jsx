import React, { useState } from 'react';
import './PersonalInfoPage.css';

const PersonalInfoPage = () => {
    const [username, setUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            id: userId,
            username: newUsername || username,
            email,
            password: newPassword
        };

        Object.keys(userData).forEach(key => userData[key] === '' && delete userData[key]);

        try {
            const response = await fetch('https://epic-event-backend.onrender.com/users/users', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
            } else {
                const errorText = await response.text();
                console.error('Error:', response.statusText, errorText);
            }
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    };

    return (
        <div>
            <h4>Personal Information</h4>
            <div className="form-container">
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="New Username"
                        className="input-field"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Current Password"
                        className="input-field"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        className="input-field"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button type="submit" className="submit-button">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfoPage;




