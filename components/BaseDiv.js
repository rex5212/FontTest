import React from 'react'

const BaseDiv = (props) => {
    return (
        <div className='border border-success rounded-5 border-3 m-4'>
            <div className='py-4 px-1'>
                {props.children}
            </div>
        </div>
    )
}

export default BaseDiv