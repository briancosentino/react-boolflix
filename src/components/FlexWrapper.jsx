import React from 'react'

const FlexWrapper = ({ children }) => {
    return (
        <div className='flex px-2 flex-wrap'>
            {children}

        </div>
    )
}

export default FlexWrapper
