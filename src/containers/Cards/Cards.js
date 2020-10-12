import React, { useState } from 'react'
import './cards.css'

import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'
import Portal from '../../components/Portal/Portal'

import { isEmpty } from '../../helpers/isEmpty'

const Cards = ({ dogs, display }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [dog, setDog] = useState('')

    const openModal = data => {
        setIsModalOpen(true)
        setDog(data)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    const grid = display === 'grid' ? 'card-group grid' : 'card-group list'

    if (isEmpty(dogs)) return <div className="error">No dogs here :)</div>

    return (
        <>
            <div className={grid}>
                {!isEmpty(dogs) &&
                    dogs.map((dog, index) => (
                        <div
                            className="col"
                            key={index}
                            onClick={() => {
                                openModal(dog)
                            }}
                        >
                            <Card image={dog?.image} name={dog?.name} owner={dog?.owner} city={dog?.owner} />
                        </div>
                    ))}
            </div>
            <Portal>
                <Modal isModalOpen={isModalOpen} closeModal={closeModal} data={dog} />
            </Portal>
        </>
    )
}
export default Cards
