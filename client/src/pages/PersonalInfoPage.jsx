import React from 'react';
import './PersonalInfoPage.css';

const PersonalInfoPage = () => {
    return (
        <div className='personalInfo'>
            <h4>Personal Information</h4>
            <div className="profile-icon">
                <img 
                    src='https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg' 
                    alt="Profile Icon" 
                    className="profile-image"
                />
            </div>
            <div className="fields" >
                <form noValidate autoComplete="off">
                    <input
                        type="text"
                        placeholder="Username"
                        className="inputfield"
                    />
                    <input
                        type="text"
                        placeholder="New Username"
                        className="inputfield"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="inputfield"
                    />
                    <input
                        type="password"
                        placeholder="Current Password"
                        className="inputfield"
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        className="inputfield"
                    />
                    <button type="submit" className="submit">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfoPage;



