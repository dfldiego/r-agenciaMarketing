import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <MdFingerprint
                            className="navbar-icon"
                        />
                        LONGO
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/servicios' className="nav-links">
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/productos' className="nav-links">
                                Productos
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/crear-cuenta' className="btn-link">
                                    <Button buttonStyle='btn--outline'>Crear cuenta</Button>
                                </Link>
                            ) : (
                                    <Link to='/crear-cuenta' className="btn-link">
                                        <Button
                                            buttonStyle='btn--outline'
                                            buttonSize='btn-mobile'
                                        >Crear Cuenta</Button>
                                    </Link>
                                )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
