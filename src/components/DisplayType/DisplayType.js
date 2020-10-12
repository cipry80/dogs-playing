import React from 'react'
import './displayType.css'

const DisplayType = ({ selectGrid }) => {
    return (
        <div className="display-control">
            <div className="control-label">Display Type:</div>
            <div className="btn-group" role="group">
                <button type="button" className="btn grid-view" name="grid" onClick={selectGrid}>
                    Grid
                </button>
                <button type="button" className="btn list-view" name="list" onClick={selectGrid}>
                    List
                </button>
            </div>
        </div>
    )
}

export default DisplayType
