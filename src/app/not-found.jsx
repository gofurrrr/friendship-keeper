import React from 'react';
import Link from 'next/link';

const notFoundPage = () => {
    return (
        <div className='bg-gray-950 h-screen flex flex-col justify-center items-center text-5xl text-green-600 font-bold'>
            <h1 >This Page is Not Found! :(</h1>
            <Link href={'/'} className='btn bg-green-600 border-none text-white mt-4'>
                Back to home
            </Link>
            
        </div>
        
    );
};

export default notFoundPage;