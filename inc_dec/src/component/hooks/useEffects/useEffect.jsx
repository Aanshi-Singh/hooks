// by useEffect hooks you tell react that ur component needs to do something after render|| runs after every render

import React from 'react'
import "./style.css";
import { useEffect,useState } from 'react';

const UseEffects = () => {
    const [myNum, setMyNum] = useState(0);
    useEffect(()=>{
        // console.log("hii");
        document.title = `Chats(${myNum})`
    });

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

        
    </>
  )
}

export default UseEffects;