import React, { useReducer } from 'react'
import "./style.css";
import { useState } from 'react';

const reducer = (state, action)=>{
    if(action.type === "INC"){
        state = state+1;
    }
    if(state>0 && action.type === "DEC"){
        state = state-1;
    }
    return state;
}


const UseReducer = () => {
    // const initialData = 0;
    // const [myNum, setMyNum] = useState(initialData);
    const initialData = 0;

    const [state, dispatch] = useReducer(reducer, initialData)


  return (
    <>
        <div>
            <p>{state}</p>
            <div className = "button2" onClick={()=> dispatch({type: "INC"})}>
                <span></span>
                <span></span>
                <span></span>
                INC
            </div>
        </div>

        <div>
            <div className = "button2" onClick={()=> dispatch({type: "DEC"})}>
                <span></span>
                <span></span>
                <span></span>
                DEC
            </div>
        </div>
    </>
  )
}

export default UseReducer;