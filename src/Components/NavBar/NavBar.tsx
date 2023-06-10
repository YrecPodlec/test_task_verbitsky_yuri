import React from 'react';
import styles from './navbar.module.scss';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
const Navbar: React.FC = () => {
    return (
        <header>
            <nav className={styles.navbar_line}>
                <div>
                    <NavLink to="/">
                        <img src="/doglogo.png" alt="" width={50} height={50}/>
                    </NavLink>
                </div>
                <div className={styles.buttons_nav}>
                    <NavLink to="/">
                        <Button variant="outlined" color="secondary">Products</Button>
                    </NavLink>
                    <NavLink to="/">
                        <Button variant="outlined" color="secondary">Our Dogs</Button>
                    </NavLink>
                    <NavLink to="/">
                        <Button variant="outlined" color="secondary">Contacts</Button>
                    </NavLink>
                    <NavLink to="/">
                        <Button variant="outlined" color="secondary">About Us</Button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/likes">
                        <img src="/avauser.jpg" alt="" width={50} height={50} className={styles.borderRadius}/>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;