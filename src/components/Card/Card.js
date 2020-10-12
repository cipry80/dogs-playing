import React from 'react'
import './card.css'

const Card = ({ image, name, owner, city }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${image})` }}>
            {/* <img src={image} className="card-img" alt="Dog" /> */}
            <div className="card-body">
                <div className="card-dog-name">{name}</div>
                <div className="card-owner-name">
                    {owner} <span>- {city}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
