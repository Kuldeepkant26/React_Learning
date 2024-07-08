'use client'
import React, { useState } from 'react'
import axios from 'axios'

function page() {
    let [image, setimage] = useState('https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg')
    const getImages = async () => {
        const resposne = await axios.get('https://dog.ceo/api/breeds/image/random');
        setimage(resposne.data.message)

    }
    return (
        <>
            <h1>This is Services  Page</h1>
            <button onClick={getImages} className='border-red-300 p-3 rounded-lg text-white bg-black m-auto mt-6'>Get image</button>
            <div className='p-6 flex w-full bg-slate-500 justify-center items-center'>
                <img src={image}></img>
            </div>
        </>
    )
}

export default page
