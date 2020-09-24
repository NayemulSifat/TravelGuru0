import React, { useContext, useState } from 'react';
import './Login.css';
import { UserContext } from '../../App';
import google from '../../resources/Icon/google.png'
import facebook from '../../resources/Icon/fb.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFrameWork, createUserWithEmailAndPassword, signInWithEmailandPassword, googleSignInPopup, fbSignInPopup } from './LoginManager';


const Login = () => {

    const iconStyles = {
        height: "30px",
        width: "30px"
    }

    const [newUser, setNewUser] = useState(false);
    const [error, setError] = useState();
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: ''

    });

    initializeLoginFrameWork();


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/confirmation" } };

    // user createaccount

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newUser) {

            if (user.email && user.password === user.confirmPassword) {
                createUserWithEmailAndPassword(`${user.firstname} ${user.lastname}`, user.email, user.password)
                    .then(res => {
                        const newUser = {
                            firstname: '',
                            lastname: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            message: ''
                        }
                        newUser.message = 'That username or email is taken. Try another';
                        setUser(newUser);
                    })
            }
            else {
                const newUser = { ...user };
                newUser.message = 'password not matched';
                setUser(newUser);
            }
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailandPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

    }

    const googleSignIn = () => {
        googleSignInPopup()
            .then(res => {
                handleResponse(res, true);
            })
    }
    const fbSignIn = () => {
        fbSignInPopup()
            .then(res => {
                handleResponse(res, true);
            })
    }
    const handleBlur = (e) => {
        let isValid = true;
        if (e.target.name === 'email') {
            isValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (isValid) {
                setError('')
            }
            else {
                setError('Wrong Email')
            }
        }
        if (e.target.name === 'password') {
            const isPassValid = e.target.value.length > 6;
            const passHasNumber = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
            isValid = isPassValid && passHasNumber;
            if (isValid) {
                setError('');
            }
            else {
                setError('Use 6 or more characters with a mix of letters, numbers & symbols')
            }
        }
        if (isValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }


    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }

    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className="login-form">


                {
                    newUser ? <h4>Create your Account</h4> : <h4>Login</h4>
                }

                {
                    newUser && <input className="login-input " type="text" name="firstname" onBlur={handleBlur} placeholder="First Name" required />
                }

                {
                    newUser && <input className="login-input" type="text" name="lastname" onBlur={handleBlur} placeholder="Last Name" required />
                }

                <input className="login-input" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" name="email" onBlur={handleBlur} placeholder="Username or Email" required />

                <input className="login-input" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                <p style={{ color: '#eb1f12' }}>{error}</p>
                <p style={{ color: '#eb1f12' }}>{user.message}</p>
                {
                    newUser && <input type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm Password" required />
                }
                <input className="loginBtn btn" type="submit" value={newUser ? "Create an account" : "Login"} />

                {
                    newUser ? <label>Already have an account? <label onClick={() => setNewUser(!newUser)} className="userCreateText" >Login</label> </label> :
                        <label>Don’t have an account? <label onClick={() => setNewUser(!newUser)} className="userCreateText" >Create Account</label></label>

                }
            </form>


            {/* Different way Sign In */}

            <div className="existig-account">
                <h6>Or</h6><br />
                <Link className='login-with-existing-account' onClick={googleSignIn}><img src={google} style={iconStyles} alt='Google' /> with Google</Link><br /><br />
                <Link className='login-with-existing-account' onClick={fbSignIn}><img src={facebook} style={iconStyles} alt='Facebook' /> with Facebook</Link>
            </div>

        </div>
    );
};

export default Login;