import React, { useState, useContext, useEffect } from 'react'
import logo from '../../assets/logo.png'
import iconSearch from '../../assets/search.png'
import './header.css'

import Button from '../../components/Button/Button'
import Search from '../../components/Search/Search'

import { StoreContext } from '../StoreContext/StoreContext'

const Header = () => {
    const { handleOnChange } = useContext(StoreContext)

    return (
        <header className="header">
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} className="img-logo" alt="Logo" />
                    </a>
                    <div className="search-wrapper">
                        <img className="icon-search" src={iconSearch} />
                        <Search handleOnChange={handleOnChange} />
                    </div>
                </div>
                <Button type="add-btn" title="Add New Dog" />
            </nav>
        </header>
    )
}

export default Header
