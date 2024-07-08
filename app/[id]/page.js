'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'




function page({ params }) {
    let id = params.id;
    let [user, setUser] = useState({});

    let getdata = async () => {
        try {
            let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
            console.log(data.email);
            setUser(data);
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getdata();
    }, [])

    return (
        <div>
            <h1>Details of {user.name}</h1>
            <div className='p-3 bg-black text-white w-fit'>
                <p>id : {id}</p>
                <p>UserName : {user.username}</p>
                <p>Email : {user.email}</p>
            </div>
        </div>
    )
}

export default page
