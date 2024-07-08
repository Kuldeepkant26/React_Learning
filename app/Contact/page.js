'use client'
import Header from '@/Components/Header'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
Header
function page() {
    let [users, setUsers] = useState([]);
    let getdata = async () => {
        try {
            let { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(data);
            setUsers(data);
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <>
            <h1>This is Contact Page</h1>
            <button onClick={getdata} className='bg-green-300 p-2 text-white rounded-lg'>Get Data</button>
            <div>
                {users.map((el) => (
                    <div>
                        <p className='border-red-400 p-3 w-full flex justify-between bg-slate-300 m-2'>
                            <p>
                                {el.name}
                            </p>
                            <Link className='bg-black rounded-xl p-3 text-white' href={`/${el.id}`}>Explore</Link>
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default page
