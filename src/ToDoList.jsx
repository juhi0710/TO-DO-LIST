import React from 'react';


const ToDoList = (props)=>{

    
    return (
    <>
    <div className='todo_style'>
    <i className="fa fa-times"
     aria-hidden="true"
    //  jab bhi cross pe koi click kre to ek function call ho "deleteItems(props.onSelect pass kiya h as a props)" 
     onClick={()=>{
         props.onSelect(props.id);
     }}/>
    <li>{props.text}</li>
    </div>
    </>
    )

};

export default ToDoList; 