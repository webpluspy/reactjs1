import { useState } from "react"

function BgChanger(){
    const [backgColor,setBgColor]=useState('yellow')
    const bodyStyle={
        backgroundColor:backgColor ,
        height:'100vh'
    }
    return(
        <>
        
        <div className="fullWidth" style={bodyStyle}>
            <h1> Bg Changer </h1>
            <button onClick={()=>{setBgColor('red')}}>Red</button><button>Green</button>
        </div>        
        </>
    )
}
export default BgChanger