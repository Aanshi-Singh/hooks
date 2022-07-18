import React from 'react'
import "./style.css";
import { useState } from 'react';

const Usestate = () => {
    const initialData = 0;
    const [myNum, setMyNum] = useState(initialData);


  return (
    <>
        <div>
            <p>{myNum}</p>
            <div className = "button2" onClick={()=> {setMyNum(myNum +1)}}>
                <span></span>
                <span></span>
                <span></span>
                INC
            </div>
        </div>

        <div>
            <div className = "button2" onClick={()=>{ myNum>0 ?setMyNum(myNum -1): setMyNum(0)}}>
                <span></span>
                <span></span>
                <span></span>
                DEC
            </div>
        </div>
    </>
  )
}

export default Usestate