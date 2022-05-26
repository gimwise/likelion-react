import React from 'react';
import { useState } from 'react';
import ShowState from './ShowState';

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');

    const increaseNum = () => {
        setNumber(number + 1);
    };

    const decreaseNum = ()=> {
        setNumber(number - 1);
    };

    const changeText = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <button onClick={increaseNum}>++</button>
            <button onClick={decreaseNum}>--</button>
            <input type="text" onChange={changeText} />

            <ShowState text={text} number={number} />
        </div>
    );
};

export default UseMemo;