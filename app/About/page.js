'use client'
import React from 'react'
// import Header from '@/Components/Header'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function page() {
    const notify = () => toast("Wow so easy !");
    return (
        <>
            <h1>This is About Page</h1>
            <button className='bg-black text-white rounded-xl p-1 px-2' onClick={notify}>Click Me</button>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default page
