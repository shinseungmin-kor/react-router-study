import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">토익 영단어 (고급)</Link>
            </h1>
            <div className="menu">
                <a href="#x" className="link">
                    단어추가
                </a>
                <a href="#x" className="link">
                    Day추가
                </a>
            </div>
        </div>
    );
}

export default Header;