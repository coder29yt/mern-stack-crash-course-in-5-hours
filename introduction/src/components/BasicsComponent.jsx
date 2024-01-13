import React from 'react'
import NavbarComponent from "./NavbarComponent"
import { useState, useEffect } from 'react'

const BasicsComponent = () => {
    // initializing useState hook - data sambhalne wala
    const [num, setNum] = useState(6)

    // initializing useEffect hook - page render hone pe call hone wala
    useEffect(() => {
        console.log("Mera Bharat Mahan")
    }, [])


    let name = "Coder29"
    return (
        <>
            <div>
                hello world
            </div>
            <div>
                Coder29
            </div>
            <NavbarComponent name={name} />
            <h2>{num}</h2>
            <button onClick={() => {
                setNum(num + 1)
            }}>Add 1 to it</button>

            <button onClick={() => setNum(num > 0 ? num - 1 : num == 0)}>Minus 1 from it</button>

        </>
    )
}


export default BasicsComponent