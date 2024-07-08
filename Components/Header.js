import React from 'react'

import Link from 'next/link'

function Header(props) {
    return (
        <div className='header flex bg-black text-white justify-between items-center p-5 w-full'>
            <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" className='w-11 rounded-full rounded mix-blend-lighten' alt='' />
            <div className='menu flex gap-3 text-red-500'>
                <Link href='/'>Home</Link>
                <Link href='/About'>About</Link>
                <Link href='/Services'>Services</Link>
                <Link href='/Contact'>Contact{props.user}</Link>
            </div>
        </div>
    )
}

export default Header
