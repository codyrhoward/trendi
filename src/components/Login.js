import React from 'react'
import './Login.css'

export default function Login() {
    const signIn = () => {

    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://i.ibb.co/MNZHW9P/Screen-Shot-2020-09-30-at-10-58-50-PM.png"  />
                <h2>trendi</h2>
            </div>
            <button type="submit" onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}
