import React from 'react';
import { Link } from "react-router-dom";

const Headerhome = () => {
    return (
       <React.Fragment>
        <div class="preloader">
            <span class="loader"></span>
        </div>
       
        <header class="header">
            <div class="header__content">
                <div class="header__logo">
                    <a href="index.html">
                        <img src="assets/img/logo/logo-light.png" alt=""/>
                    </a>
                </div>
    
                <form action="#" class="header__search">
                    <input type="text" placeholder="Search Here..."/>
                    <button type="button"><i class="far fa-search"></i></button>
                    <button type="button" class="close"><i class="far fa-times"></i></button>
                </form>
    
                <div class="header__menu">
                    <ul class="header__nav">
                        <li class="header__nav-item">
                            <Link class="header__nav-link" to="/">Home</Link>
                        </li>
                        
                        <li class="header__nav-item">
                            <Link to="/wallet-connect" class="header__nav-link">Connect Wallet</Link>
                        </li>
                       
                    </ul>
                </div>
    
                <div class="header__actions">
                    <div class="header__action header__action--search">
                        <button class="header__action-btn" type="button"><i class="far fa-search"></i></button>
                    </div>
    
                    <div class="header__action header__action--profile">
                        <a class="header__profile-btn header__profile-btn--verified" href="#" data-bs-toggle="dropdown">
                            <img src="assets/img/avatars/avatar-1.jpg" alt=""/>
                            <div>
                                <p>@wilson</p>
                                <span>920.75 ETH</span>
                            </div>
                            <i class="far fa-angle-down"></i>
                        </a>
    
                        <ul class="dropdown-menu header__profile-menu slideIn">
                            <li><Link to="/profile"><i class="far fa-user"></i> <span>Profile</span></Link></li>
                            <li><Link to="/profile"><i class="far fa-list-ul"></i> <span>Activity</span></Link></li>
                            <li><Link to="/create-nft"><i class="far fa-layer-plus"></i> <span>Add Item</span></Link></li>
                            <li><Link to="/profile"><i class="far fa-cog"></i> <span>Settings</span></Link></li>
                            <li><a href="#"><i class="far fa-sign-out-alt"></i> <span>Sign out</span></a></li>
                        </ul>
                    </div>
                </div>
    
                <button class="header__btn" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
      </React.Fragment>
    );
};
export default Headerhome;