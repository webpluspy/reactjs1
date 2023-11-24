import { useCallback, useEffect, useRef, useState } from "react";




function PasswordGenerator(){

   let [length,setLength]=useState(8)
   let [numberAllowed,setNumberAllowed]=useState(false)
   let [characterAllowed,setCharacterAllowed]=useState(false)
   let [password,setPassword]=useState('')
   let pwdRef=useRef(null)

   let randomRassword=useCallback( ()=>{
    let pass=''
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+='1234567890';
    if(characterAllowed) str+='!@#$%^&*()_+=.<>?/';
    for (let i = 0; i < length; i++) {
        let index=Math.floor(Math.random()*str.length)
        pass+=str.charAt(index)
        console.log(pass)

        
    }
    setPassword(pass)
    console.log(pass)
    },[length,numberAllowed,characterAllowed,setPassword]
)
    useEffect(()=>{randomRassword()},[length,numberAllowed,characterAllowed,randomRassword])
    function copy(){
        window.navigator.clipboard.writeText(password)
        pwdRef.current.select()

    }
    return(
        <>
        <br />
        <br />
        <center>
        <input type="text" value={password} ref={pwdRef}/> 
        <button onClick={copy}> Copy  </button>
        <br />
        <br />
        <input type="range" name="" id="" value={length}  onChange={(e)=>{setLength(e.target.value)}} /> <label>Length({length})</label>
        <input type="checkbox" name="" id="" onChange={()=>{setNumberAllowed(prev => !prev)}} /> Numbers
        <input type="checkbox" name="" id="" onChange={()=>{setCharacterAllowed(prev => !prev)}} /> Character

        
        </center>
        </>
    )
}
export default PasswordGenerator;