import React from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';

const movies = [
    {id : 1, name : '아이언맨', description : "3000만큼 사랑해"},
    {id : 2, name : '블랙팬서', description : "최애 마블 히어로"},
    {id : 3, name : '어바웃타임', description : "인생 영화"},
    {id : 4, name : '기묘한 이야기', description : "밤에 보면 무섭지만 재밌음"},
    {id : 5, name : '브리저튼', description : "다프네 이쁘다"},
]

const Movies = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    const style ={
        color : 'red',
    }

    return (
        <div>
            <h2>여긴 영화</h2>
            <ul>
                {movies.map((movie) => <li key={movie.id}><NavLink style={({isActive}) => (isActive ? style : undefined)} to={`/movies/${movie.id}`} state={{name : movie.name, description: movie.description}}>{movie.name}</NavLink></li>)}
            </ul>
            <hr/>
            <Outlet/>
            <div>
                <button onClick={goHome}>홈으로</button>
            </div>
        </div>
    );
};

export default Movies;