import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import logo from '../assets/logo.png';
import '../App.css'

const Navbar = ({ cartCount, isLoggedIn, username, onLogout }) => {
    return (
        <>
            <div className='nav'>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <input type="text" placeholder='Search for Products and More' id='search' />
                <div className="sub">
                    <Link to='/'>
                        <h3>Home</h3>
                    </Link>
                    <Link to='/categories'>
                        <h3>Categories</h3>
                    </Link>
                    {isLoggedIn ? (
                        <div className='login'>
                            <h3>{username}</h3>
                            <button onClick={onLogout}>Logout</button>
                        </div>
                    ) : (
                        <Link to="/signIn">
                            <h3>SignIn/SignUp</h3>
                        </Link>
                    )}
                </div>
                <Link to='/cart'>
                    <h3><ShoppingCart></ShoppingCart> {cartCount}</h3>
                </Link>
            </div>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </>
    )
}

export default Navbar
