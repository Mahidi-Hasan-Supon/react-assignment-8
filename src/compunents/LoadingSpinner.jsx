import React from 'react';
import { ClockLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div>
            <div className='flex justify-center h-[200px] items-center my-50'>
                <ClockLoader></ClockLoader>
               <h1 className='text-xl font-semibold ml-2'> Loading...</h1>
            </div>
        </div>
    );
};

export default LoadingSpinner;