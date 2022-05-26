import React from 'react';
import { Navigate } from 'react-router-dom';

const MyPage = () => {
    const flag = false;

    if(!flag){
        return <Navigate to="/login" replace={true}/>
    }

    return (
        <div>
            <h2>여긴 마이페이지</h2>
        </div>
    );
};

export default MyPage;