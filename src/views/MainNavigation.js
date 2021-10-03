import React from 'react'
import MainHeader from './MainHeader';
import '../css/MainNavigation.css';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

export default function MainNavigation({ drawerIsOpen, openDrawerHandler, closeDrawerHandler }) {

    return (
        <React.Fragment>
            {drawerIsOpen && (
                <Backdrop onClick={closeDrawerHandler} />
            )}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawwer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">
                        YourPlaces
                    </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

