import "./css/App.css";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import OGItem from "./components/OGItem";
import DoneItem from "./components/DoneItem";
import DroppedItem from "./components/DroppedItem";
import React, { useState,useEffect } from "react";



function App() {
 
  const [ogTask, setOGTask] = useState(JSON.parse(localStorage.getItem("LocalOgList"))||[]);
  const [doneTask, setdoneTask] = useState(JSON.parse(localStorage.getItem("LocalDoneList"))||[]);
  const [droppedTask, setDroppedTask] = useState(JSON.parse(localStorage.getItem("LocalDroppedList"))||[]);

  useEffect(()=>{

    localStorage.setItem("LocalOgList", JSON.stringify(ogTask));
    localStorage.setItem("LocalDoneList", JSON.stringify(doneTask));
    localStorage.setItem("LocalDroppedList", JSON.stringify(droppedTask));

  },[ogTask,doneTask,droppedTask])



  
 
  function itemAddonClick(task) {
    console.log("New Item Added to Ongoing List");
    setOGTask((prevVal) => [...prevVal,{ id: Date.now(), data: task, date: new Date().toLocaleString("en-IN")}]);
  }

  function doneTaskFun(id){
    setdoneTask((prevVal)=> [...prevVal, ...ogTask.filter((element)=> element.id===id) ] )
    setOGTask((prevVal) => [...ogTask.filter((element) => element.id !== id)]);
    console.log("Task" + id +" moved to finished list")
  }

  function deleteDoneTask(id){
    if(window.confirm("Are you sure to remove the task?")){
      setdoneTask([...doneTask.filter((element)=> element.id!==id)])
      console.log("Task "+ id +" has been removed");

    }
  }

  function deleteOGTask(id) {
    //let newArr= ogTask.filter((element)=> element.id===id);
    setDroppedTask((prevVal) =>[...prevVal,...ogTask.filter((element) => element.id === id)]);

    setOGTask((prevVal) => [...ogTask.filter((element) => element.id !== id)]);
    console.log("Task " + id + " moved to dropped list");
  }

  function deleteDroppedTask(id){
   if(window.confirm("Are you sure to remove the task?")===true)
   {
    setDroppedTask(()=> droppedTask.filter((element)=> element.id !==id))
   }
  }

  function restoreDroppedTask(id){
    setOGTask((prevVal)=>[...prevVal, ...droppedTask.filter((element)=>element.id === id)]);
    setDroppedTask(()=> droppedTask.filter((element)=> element.id !==id))
    console.log("Task "+ id+ " restored to ongoing List");
  }

  return (
    <div className="App">
      <Header />
      <AddItem addItemfun={itemAddonClick} />

      <div className="listGroupDiv row">
        <div className="listDiv DoneItem">
          <p className="listTitle">Completed Tasks</p>
          {doneTask.map((element)=>
          <DoneItem 
            key={element.id}
            id ={element.id}
            data={element.data}
            date ={element.date}
            deleteDoneItemFun = {deleteDoneTask}
          />
          )}
        </div>

        <div className="listDiv OGItem">
          <p className="listTitle"> Ongoing Tasks</p>
          {ogTask.map((element) => (
            <OGItem
              id={element.id}
              key={element.id}
              data={element.data}
              date={element.date}
              deleteFun={deleteOGTask}
              doneFun= {doneTaskFun}
              
            />
          ))}
        </div>

        <div className="listDiv DroppedItem">
          <p className="listTitle"> Deleted Tasks</p>
          {droppedTask.map((element) => (
            <DroppedItem
              id={element.id}
              key={element.id}
              data={element.data}
              date={element.date}
              deleteFun={deleteDroppedTask}
              restoreFun={restoreDroppedTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
