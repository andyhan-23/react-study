import React from "react";
import { Component } from "react";

class Event extends Component{

    state = {
        message: ''
    }

    render(){
        return(
        <>
            <h1>이벤트 연습</h1>
            <input 
                type='text'
                name='message'
                placeholder='아무거나 입력'
                value={this.state.message}
                onChange={
                    (e) => {
                        this.setState({
                            message: e.target.value
                        });
                    }
                }
                />
            <button onClick={
                ()=>{
                    alert(this.state.message);
                    this.setState({
                        message:''
                    });
                }
            }>확인</button>
        </>
        );
    }
}
export default Event;
<test>
