import React from "react";

const Component= props =>{
    return(
    <>
    <h1>안녕, 나는 {props.name}이라고 해</h1>
    <h2>나의 직업은 {props.children}이야.</h2>
    <h3>asdasdsa</h3>
    </>
    )
}
export default Component;