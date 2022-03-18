import React from 'react';

const Writing = () => {
    return (
        <div className='text-lg font-normal flex flex-col md:flex-row gap-4 md:gap-24'>
            <div className='space-y-4'>
                <a href='#' className=' group flex flex-col'>
                    <span className='underline'>The NFT Space</span>
                    <span className='group-hover:underline text-gray-400'>
                        Trying to make sense of it all
                    </span>
                </a>
                <a href='#' className=' group flex flex-col'>
                    <span className='underline'>Fonts in 2021</span>
                    <span className='group-hover:underline text-gray-400'>
                        What about them
                    </span>
                </a>
                <a href='#' className=' group flex flex-col'>
                    <span className='underline'>App design</span>
                    <span className='group-hover:underline text-gray-400'>
                        I've got opinions, read them here
                    </span>
                </a>
            </div>
            <div className='space-y-4'>
                <a href='#' className=' group flex flex-col'>
                    <span className='underline'>The NFT Space</span>
                    <span className='group-hover:underline text-gray-400'>
                        Trying to make sense of it all
                    </span>
                </a>
                <a href='#' className=' group flex flex-col'>
                    <span className='underline'>Fonts in 2022</span>
                    <span className='group-hover:underline text-gray-400'>
                        What about them
                    </span>
                </a>
                <a href='#' className=' group flex flex-col'>
                    <span className='underline'>App design</span>
                    <span className='group-hover:underline text-gray-400'>
                        I've got opinions, read them here
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Writing;
