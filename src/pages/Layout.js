import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const style = {
        background : 'green',
        padding : 20,
    }
    return (
        <div>
            <header style={style}>리액트 라우터</header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;