import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h3>
                <a className="header-logo"
                    href="https://t.me/moraldown">catStar=</a>
            </h3>
            <ul className="sort-list">
                <li className="sort-list-item">
                    <a href="https://t.me/moraldown#">People</a>
                </li>
                <li className="sort-list-item" >
                    <a href="https://t.me/moraldown">Planets</a>
                </li>
                <li className="sort-list-item">
                    <a href="https://t.me/moraldown">Starships</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;