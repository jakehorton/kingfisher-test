import React from 'react';
import { Link } from 'react-router-dom';
import './nav.styles.css'


const Nav = () => (
    <nav>
        <img src='https://i.imgur.com/8HtEWZl.jpg'/>
        <ul>
            <li><a href='http://www.linkedin.com/in/jake-horton-dev'>LinkedIn</a></li>
            <li><Link to='/reading'>Reading</Link></li>
            <li><Link to='/calculator'>Calculator</Link></li>
        </ul>
    </nav>
)

export default Nav;
