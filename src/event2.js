import React from "react";
import { useState } from "react";

const Event2 =()=>{


const [name, setName] = useState('');
const [message, setMessage] = useState(''); 
const onName = e => setName(e.target.value);
const onMessage = e=> setMessage(e.target.value);
const onClick=()=>{
    alert('이름'+name+'메시지:'+message);
    setName('');
}
    return(
        <>
            <input 
                type="text"
                name="name"
                placeholder="이름 입력"
                value={name}
                onChange={onName}
            />
            <input 
                type="text"
                name="message"
                placeholder="메시지 입력"
                value={message}
                onChange={onMessage}
            />
            <button onClick={onClick}>확인</button>
        </>
    )
}
export default Event2
