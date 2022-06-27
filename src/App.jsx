import React, { useState } from 'react';
import ToDoList from './ToDoList';
// pehla div background ke lie h...second div beech wala todo list ke lie hai
const App = ()=>{

    const [inputList, setInputList] = useState();
    // initial data hi empty array hai useState([]) me..to "items" bhhi humari ek empty array  ban gyi
    const [items, setItems] = useState([]);
    
    const itemEvent = (event)=>{
     setInputList(event.target.value);
    }

    // const listOfItems =()=>{
    //  setItems((oldItems) =>{
    //      return[...oldItems, inputList];
    //  });
    //  setInputList("");
    // };

    
    const listOfItems = () => {
        if (setInputList === undefined || setInputList === "" ) {
                       alert("Before add type todo")
             } 
            //  agar setItems array me ko bhi data hai wo oldItems me ajayega..and uske baad inputList me last me jo bhi likh rhe h usko add krdo array me... return [] me iske andr likha h sab..it means ye ek array hai
       else { setItems((oldItems) => {

             return [...oldItems, inputList];

             })
            //  the moment hum add pe click kr dete hhai..to we don't want ki apple still input list me show ho...islie ye use kia hai...Add krte hi setInputList empty ho jaye  
                      setInputList("");
             }
}


const deleteItems=(id)=>{
    // setItems me hi to list add hogi todolist ki..as it's an rray
    setItems((oldItems) =>{
        // arrElem= current text(text props) ka data, index= current text data ka index no(id)..jise delete krna  hai..jaise hi user current text data pe click krta h..uska index(id) and jo likha hai wo yaha mil jayega..index and arrElem me respectively...filter jo match ho jaa rha h,,id and oldItems array me use delete kr rha h
             return oldItems.filter((arrElem, index)=>{
                // agar index no id se match nhi ho rha to use vaise hi render krwa rhe h...or agar match hoga to delete krwa denge
        return index!==id;

             })
         });
        };



    return(
        <>
      <div className='main_div'>
          <div className='center_div'>
              <br/>
              <h1>To DO LIST</h1>
              <br/>
              <input type="text" placeholder='Add your items' value={inputList} onChange={itemEvent}/>
              <button onClick={listOfItems}> + </button>

              <ol>
                  {/* jo bhi user input field me likh rhaa h use ek  empty array(items) me store krwaenge...and saath hi sath use call bhi krwaenge ..we called array here..with the help of array "items" hum one by one todoist ke li ko  render krwa rhe h..index islie add kia jisse pata chale konsa item delete ho rha hai...id use krenge uske lie...ye pata lagane ke lie..index currentvalue ka deta hai bus..bcoz array.map is basically like for loop*/}
                  {items.map((itemval, index) => {
                    return <ToDoList
                    // key={index} 
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}
                    />
                  })}
              </ol>
          </div>
      </div>
        </>
    );
};


export default App;



