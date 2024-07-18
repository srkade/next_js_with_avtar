import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className='md:w-64 hidden md:block fixed'>
                <SideNav />
                <h1>Hello</h1>
            </div>
            <div className='md:ml-64'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default layout