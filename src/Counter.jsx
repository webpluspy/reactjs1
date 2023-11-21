import React, {useState} from "react";

function Counter(){

    const bodyStyle={
        backgroundColor:'blue'
    }

   let [count,setCounter]=useState(5)

    function incrementValue(){
        console.log("The Value of dec count is ",{count});
        count=count+1;
        if(count<0){
            count=0;
            setCounter(count);

        }
        else if(count>10){
            count=10;
            setCounter(count);

        }
        setCounter(count);


    }
    function decrementValue(){
        console.log("The Value of inc  count is ",{count});
        count=count-1;
        if(count<0){
            count=0;
            setCounter(count);

        }
        else if(count>10){
            count=10;
            setCounter(count);

        }

        setCounter(count);

    }


    return(
    <>
    <main style={bodyStyle}>
    <h1>Counter</h1>
    <h2>The Value of count is {count}</h2>
    <button onClick={incrementValue}>Increment Value{count}</button>
    <button onClick={decrementValue}>Decrement Value{count}</button>
    <footer>
        <h3>Value of Count = {count}</h3>
    </footer>
    </main>


    
    </>
    )
}
export default Counter;