import React, {useMemo} from 'react';


const getNumber = (number) => {
    console.log("숫자 변동");
    return number;
};

const getText = (text) =>{
    console.log("문자 변경");
    return text;
}

const ShowState = ({number, text}) => {
    const showNumber = useMemo(()=>getNumber(number), [number]);
    const showText = useMemo(()=> getText(text), [text]) ;


    return (
        <div>
            {showNumber}<br/>
            {showText}
        </div>
    );
};

export default ShowState;