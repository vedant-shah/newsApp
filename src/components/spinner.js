import React from 'react'
import loading from './loading.gif'
function spinner() {
    return (
        <div className='mx-auto' style={{marginTop: '20%'}}>
            <img src={loading} alt="Loading..." />
        </div>
    )
}

export default spinner
