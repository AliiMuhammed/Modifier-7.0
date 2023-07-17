import React from 'react';
import "./style/signUp.css"
import SignUpForm from './SignUpForm';
const Sign = () => {
    return (
        <>
        <section className="signUp">
            <div className="container">
                <h1>Sign Up</h1>
                <SignUpForm/>
            </div>
        </section>
        </>
    );
};

export default Sign;