import React, { useState, useEffect, useContext, useReducer } from 'react'
import './home.css'

import Cards from '../Cards/Cards'
import DisplayType from '../../components/DisplayType/DisplayType'
import { StoreContext } from '../StoreContext/StoreContext'

const initialState = { loading: false, payload: [], error: null }

const reducer = (state, action) => {
    switch (action.type) {
        case 'DOGS_REQUEST':
            return { ...state, loading: true, payload: [], error: null }
        case 'DOGS_RESPONSE_SUCCESS':
            return { ...state, loading: false, payload: action.payload, error: null }
        case 'DOGS_RESPONSE_FAILED':
            return { ...state, loading: false, payload: [], error: action.payload }
        default:
            return state
    }
}

const Home = () => {
    const { searchKey } = useContext(StoreContext)
    const [display, setDisplay] = useState('grid')
    const [dogs, dispatch] = useReducer(reducer, initialState)
    const [searchResult, setSearchResult] = useState(dogs?.payload)

    const fetchDogs = async () => {
        dispatch({ type: 'DOGS_REQUEST' })
        try {
            const response = await fetch('https://my-json-server.typicode.com/acinterviews/dogs/dogs/')
            const dogs = await response.json()

            dispatch({
                type: 'DOGS_RESPONSE_SUCCESS',
                payload: dogs
            })
            setSearchResult(dogs)
        } catch (error) {
            // this API is not handling the errors, but I'll leave this code because we need to handle the errors
            dispatch({
                type: 'DOGS_RESPONSE_FAILED',
                payload: 'Something went wrong'
            })
        }
    }

    const filteredData = () => {
        return dogs?.payload.filter(({ name, owner, city }) => {
            return (
                name.toLowerCase().includes(searchKey.toLowerCase()) ||
                owner.toLowerCase().includes(searchKey.toLowerCase()) ||
                city.toLowerCase().includes(searchKey.toLowerCase())
            )
        })
    }

    useEffect(() => {
        fetchDogs()
    }, [])

    useEffect(() => {
        if (searchKey) {
            setSearchResult(filteredData(dogs?.payload, searchKey))
        } else {
            setSearchResult(dogs?.payload)
        }
    }, [searchKey])

    const selectGrid = e => {
        setDisplay(e.target.name)
    }

    return (
        <main className="home">
            <Cards dogs={searchResult} display={display} />
            <DisplayType selectGrid={selectGrid} />
        </main>
    )
}

export default Home
