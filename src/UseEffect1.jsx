import { useEffect, useState } from "react";

function CheckEffect(){
   let [count,SetCount]=useState(0);
   useEffect(()=>{
    console.log("Adeel Noshahi")
   },[count])

    return(
        <>
        <h1>The Value of count={count}</h1>
         <button onClick={()=>SetCount(count+1)}>Click Me</button>
        
        
        </>
    )
}  

export default CheckEffect