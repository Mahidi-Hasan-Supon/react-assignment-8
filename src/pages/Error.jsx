import React from 'react';
import error from '../assets/error.png'
import Navbar from '../compunents/Navbar';
import Footer from '../compunents/Footer';

const Error = () => {
    return (
        
        <div>
            <Navbar></Navbar>
           <div className='w-lg mx-auto text-center my-5'>
             <img className='flex justify-center items-center' src={error} alt="" />
             <h1 className='text-2xl font-semibold'>Oops, page not found!</h1>
             <p className='opacity-50'>The page you are looking for is not available.</p>
             <button className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Go back</button>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default Error;