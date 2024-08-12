import React from 'react';
import './PersonalInfoPage.css';

const PersonalInfoPage = () => {
    return (
        <div>
            <h4>Personal Information</h4>
            <div className="form-container">
                <form noValidate autoComplete="off">
                    <input type="text" placeholder="First Name" className="input-field" />
                    <input type="text" placeholder="Last Name" className="input-field" />
                    <input type="text" placeholder="Username" className="input-field" />
                    <input type="text" placeholder="New Username" className="input-field" />
                    <input type="email" placeholder="Email" className="input-field" />
                    <input type="password" placeholder="Current Password" className="input-field" />
                    <input type="password" placeholder="New Password" className="input-field" />
                    <button type="submit" className="submit-button">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfoPage;


