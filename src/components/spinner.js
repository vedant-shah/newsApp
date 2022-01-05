import React from 'react'
function spinner() {
    return (
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem', marginTop:'20%'}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default spinner
