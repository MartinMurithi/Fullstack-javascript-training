import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../App'

function Test() {
    let data = useContext(ProductsContext)
    const [test, setTest] = useState(data);

    useEffect(() => {
        console.log(data);
        setTest(data)
        
    },[])

    return (
        <>
            {test && test.length > 0 ?
                test.map(datum => {
                    return (
                        <h5 key={datum.id}>{ datum.price }</h5>
                    )
                }):null}
        </>
  )
}

export default Test