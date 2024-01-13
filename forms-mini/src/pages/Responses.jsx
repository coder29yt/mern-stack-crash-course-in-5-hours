import React, { useEffect, useState } from 'react'
import ResponseComponent from '../components/ResponseComponent'
import "./Responses.css"

const Responses = () => {

    const [users, setUsers] = useState([])

    const getData = async () => {
        const res = await fetch("http://localhost:5000/api/getData", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setUsers(data.users)
        console.log(users)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div id='mainContainer'>
            {
                users.map((user) => {
                    return <ResponseComponent key={user._id} name={user.name} id={user._id} email={user.email} phone={user.phone} message={user.message} />
                })
            }
        </div>
    )
}

export default Responses