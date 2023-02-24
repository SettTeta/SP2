import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ paddingLeft: '30px' }}>
                <a className="navbar-brand">VR Tours</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="../">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='./gettingStarted'>Getting Started</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./browse">Browse</a>
                    </li>

                </ul>
            </nav>

        </header>
    );
};
export default Header;