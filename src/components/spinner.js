import React from 'react'
// import loading from './loading.gif'
function spinner() {
    return (
        // {<div className='mx-auto' style={{marginTop: '20%'}}>
        //     <img src={loading} alt="Loading..." />
        // </div>}
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem', marginTop:'20%'}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default spinner
