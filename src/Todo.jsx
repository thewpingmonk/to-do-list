import React from "react";

const ToDo = (props)=>{
    return (
        <>
            <div className='listitem'>

            <i onClick={() =>{
                props.onselect(props.id)
            }} className="fa-sharp fa-solid fa-xmark"> </i>
            <li>{props.text}</li>

            </div>
        </>
    )
}
export default ToDo;