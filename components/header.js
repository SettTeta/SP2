import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{paddingLeft: '30px'}}>
                <a className="navbar-brand">VR Tours</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="../">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./browse">Browse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                    </ul>
                </div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>

                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </nav>

        </header>
    );
};
export default Header;