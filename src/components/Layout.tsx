import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
    return (
        <div className='py-20 container'>
            <div className='max-w-[900px] mx-auto flex flex-col items-center'>
                <Outlet />
                <div className='w-full mt-[72px] flex items-center justify-between'>
                    <span className='text-sm text-gray-400'>Dong 2021</span>
                    <span className='text-sm text-gray-400'>Thai Binh</span>
                </div>
            </div>
        </div>
    );
};

export default Layout;
