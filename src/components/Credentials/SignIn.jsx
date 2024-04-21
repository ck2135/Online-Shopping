import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'

const SignIn = ({ onLogin }) => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '', 
    });

    const { username, email, password, confirmPassword } = data;

    const signUpchangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const [signIn, setsignIn] = useState({
        username1: '',
        password1: ''
    });

    const { username1, password1 } = signIn;

    const signInChangeHandler = (e) => {
        setsignIn({ ...signIn, [e.target.name]: e.target.value });
    };

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    const submitHandler = (e) => {
        e.preventDefault(); 

        axios.get("https://allprojectsnippets-default-rtdb.firebaseio.com/text.json")
            .then(response => {
                const userData = response.data;
                const existingUser = Object.values(userData).find(user => user.username === data.username && user.password === data.password);
                if (existingUser) {
                    alert('Already exist');
                } else {
                    if (username.length <= 5) {
                        alert("Username must be at least 5 characters");
                    } else if (password !== confirmPassword) {
                        alert('Passwords are not matching');
                    } else {
                        axios.post('https://allprojectsnippets-default-rtdb.firebaseio.com/text.json', data)
                            .then(() => {
                                alert('Submitted successfully!');
                            }).catch(error => {
                                console.error('Error submitting form:', error);
                            });
                    }
                }
            }).catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    const signInHandler = (e) => {
        e.preventDefault(); 

        axios.get("https://allprojectsnippets-default-rtdb.firebaseio.com/text.json")
            .then(response => {
                const userData = response.data;
                const existingUser = Object.values(userData).find(user => user.username === signIn.username1 && user.password === signIn.password1);
                if (existingUser) {
                    alert('Successfully logged in');
                    onLogin(existingUser.username);
                    navigate('/');
                } 
                else {
                    alert('Please Sign Up')
                }
                    
            }).catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    return (
        <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className={`sign-in-form ${isSignUp ? 'hidden' : ''}`} onSubmit={signInHandler}>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" name='username1' value={username1} onChange={signInChangeHandler}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" name="password1" value={password1} onChange={signInChangeHandler}/>
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <SocialIcon url="https://facebook.com" className='icon' />
                            <SocialIcon url="https://twitter.com" className='icon' />
                            <SocialIcon url="https://gmail.com" className='icon' />
                            <SocialIcon url="https://linkedin.com" className='icon' />
                        </div>
                    </form>
                    <form action="#" className={`sign-up-form ${isSignUp ? '' : 'hidden'}`} onSubmit={submitHandler}>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder='Username' name='username' value={username} onChange={signUpchangeHandler} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder='email' name="email" value={email} onChange={signUpchangeHandler} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder='password' name="password" value={password} onChange={signUpchangeHandler} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder='confirm password' name="confirmPassword" value={confirmPassword} onChange={signUpchangeHandler} />
                        </div>
                        <input type="submit" className="btn" value="Sign up"/>
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <SocialIcon url="https://facebook.com" className='icon' />
                            <SocialIcon url="https://twitter.com" className='icon' />
                            <SocialIcon url="https://gmail.com" className='icon' />
                            <SocialIcon url="https://linkedin.com" className='icon' />
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                            Discover a world of possibilities! Join us and explore a vibrant
                            community where ideas flourish and connections thrive.
                        </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                            Sign up
                        </button>
                    </div>
                    <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                            Thank you for being part of our community. Your presence enriches our
                            shared experiences. Let's continue this journey together!
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                            Sign in
                        </button>
                    </div>
                    <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
