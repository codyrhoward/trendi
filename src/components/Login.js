import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'

export default function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

            console.log(result);
        })
        .catch(error => alert (error.message));
    };
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
