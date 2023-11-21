import { useState } from "react"

function BgChanger(){
const blueButton={backgroundColor:'blue',width:'100px', margin:'10px' ,color:'white' }
const YellowButton={backgroundColor:'yellow',width:'100px', margin:'10px' ,color:'white' }
const redButton={backgroundColor:'red',width:'100px', margin:'10px' ,color:'white' }
   const [bgColor,setBgColor]=useState('white')
    const bodyStyle={
        backgroundColor : bgColor ,
        height: '100vh',
        margin:'0',

    }

    return(
   
        
        <div style={bodyStyle}>
            <h1>Bg Changer</h1>
            <button style={blueButton} onClick={()=>setBgColor('blue')}>Blue</button>
            <button style={YellowButton} onClick={()=>setBgColor('Yellow')}>Yellow</button>
            <button style={redButton} onClick={()=>setBgColor('red')}>Red</button>
        </div>
        
   
    )
}


export  default BgChanger