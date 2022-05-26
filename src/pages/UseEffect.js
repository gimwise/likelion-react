import React, { useEffect } from 'react';
import { useState, useRef} from 'react';

// 타이머
const UseEffect = () => {
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const time = useRef(60);
    const timer = useRef(null);

    useEffect(()=>{
        timer.current = setInterval(()=>{
            setMin(parseInt(time.current / 60));
            setSec(time.current % 60);
            time.current--;
        }, 100);
        return () => clearInterval(timer.current); 
    }, []);

    useEffect(()=>{
        if(time.current === 0){
            console.log("타임아웃");
            clearInterval(timer.current);
        }
    }, [sec]);

    return (
        <div>
            <h1>{min}분 {sec}초</h1>            
        </div>
    );
};

export default UseEffect;