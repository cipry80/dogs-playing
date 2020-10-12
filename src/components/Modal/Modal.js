import React from 'react'
import './modal.css'

const Modal = ({ isModalOpen, closeModal, data }) => {
    const { image, name, owner } = data

    if (!isModalOpen) {
        return null
    }
    return (
        <div className="modal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">My dog choise</h4>
                        <button type="button" className="close" onClick={closeModal}>
                            <span aria-hidden="true">x</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={image} alt="dog" />
                        <div className="dog-info">
                            <div>Dog name: {name}</div>
                            <div>Owner: {owner}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
