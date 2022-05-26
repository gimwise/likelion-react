import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>여긴 홈</h2>
            <ul>
                <li>
                    <Link to="/movies">영화 보러가기</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
