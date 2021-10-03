import React, { useContext } from 'react'
import '../css/NavLinks.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './auth-context';


export default function NavLinks(props) {
    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All USERS</NavLink>
            </li>

            {auth.isLoggedIn &&
                <React.Fragment>
                    <li>
                        <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
                    </li>
                    <li>
                        <NavLink to="/places/new">ADD PLACE</NavLink>
                    </li>
                </React.Fragment>}
            {!auth.isLoggedIn &&
                <li>
                    <NavLink to="/auth">AUTHENTICATE</NavLink>
                </li>}
            {auth.isLoggedIn &&
                <li>
                    <NavLink to="/auth"onClick={auth.logout}>LOGOUT</NavLink>
                </li>}
        </ul>
    )
};
