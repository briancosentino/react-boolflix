import React, { useState } from 'react'
import { GlobalProvider, useGlobal } from './GlobalProvider'


const PopularList = () => {
    const { populars, setPopulars } = useGlobal()
    console.log(populars);

    return (
        <div>

        </div>
    )
}

export default PopularList
