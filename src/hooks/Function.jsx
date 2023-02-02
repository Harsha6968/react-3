import React from "react";
import { useState } from "react";
let Function=()=>{
    let message="hello"
    let [variable,setVariable]=useState("hello");
   let gmHandler=()=>{
        setVariable("gm")
    }
  let  gnHandler=()=>{
        setVariable("gn")
    }
    return(
        <div>
            <h1>wish message:{variable}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Function