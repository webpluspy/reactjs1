const { useRef } = require("react")

function CheckRef(){

    let inputControl=useRef(null);

    function performRef(){
        inputControl.current.value='100';
        inputControl.current.focus();

    }

    return(
        <>
            <input type="text"  ref={inputControl}/>
            <button onClick={performRef}>Click Me</button>

        </>
    )
}
export default CheckRef;