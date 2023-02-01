import { useState } from "react";

const Say =()=>{
    const[message, setMessage] = useState("");
    const enter =()=> setMessage('hi');
    const leave =()=> setMessage('bye');

    return(
        <>
        <button 
            onClick={enter}
            />
        <button
            onClick={leave}
            />
        <h1>{message}</h1>
        </>
    )
}
export default Say;