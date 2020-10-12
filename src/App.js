import React, { useReducer, useState, useEffect } from 'react'
import 'normalize.css'
import './app.css'

// components
import Footer from './components/Footer/Footer'

// containers
import Header from './containers/Header/Header'
import Home from './containers/Home/Home'

import { StoreProvider } from './containers/StoreContext/StoreContext'

const App = () => {
    const [searchKey, setSearch] = useState('')

    const handleOnChange = e => {
        setSearch(e.target.value)
    }

    return (
        <div className="App">
            <StoreProvider value={{ searchKey, handleOnChange }}>
                <Header />
                <div className="wrapper">
                    <Home />
                    <Footer />
                </div>
            </StoreProvider>
        </div>
    )
}

export default App
