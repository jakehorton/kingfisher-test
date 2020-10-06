import React from 'react';
import { Link } from 'react-router-dom';
import './nav.styles.css'


const Nav = () => (
    <nav>
        <Link to='/'><img alt='Kingfisher Logo' src='https://i.imgur.com/8HtEWZl.jpg'/></Link>
        <ul>
            <li><Link to='/cv'>CV</Link></li>
            <li><a href='https://speckyboy.com/'>News</a></li>
            <li><Link to='/calculator'>Calculator</Link></li>
        </ul>
    </nav>
)

export default Nav;
