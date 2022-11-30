import "./css/App.css";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import OGItem from "./components/OGItem";
import DoneItem from "./components/DoneItem";
import DroppedItem from "./components/DroppedItem";
import React, { useState } from "react";

function App() {
  const [ogTask, setOGTask] = useState([]);
  const [doneTask, setdoneTask] = useState([]);
  const [droppedTask, setDroppedTask] = useState([]);


  function itemAddonClick(task) {
    // console.log(Date.now() + " " + new Date().toLocaleDateString("en-IN"));
    console.log("New Item Added to Ongoing List");
    return setOGTask((prevVal) => [
      ...prevVal,
      { id: Date.now(), data: task, date: new Date().toLocaleString("en-IN") },
    ]);
  }
  function deleteOGTask(id){
  //let newArr= ogTask.filter((element)=> element.id===id);
    
    setdoneTask((prevVal)=> ([...prevVal,...ogTask.filter((element)=> element.id===id)]));


  }

  return (
    <div className="App">
      <Header />
      <AddItem addItemfun={itemAddonClick} />

      <div className="listGroupDiv row">
        <div className="listDiv DoneItem">
          <p className="listTitle">Completed Tasks</p>
          <DoneItem />
          </div>


          <div className="listDiv OGItem">
            <p className="listTitle"> On Going Tasks</p>
            {ogTask.map((element) => (
              <OGItem
                id={element.id}
                key={element.id}
                data={element.data}
                date={element.date}
                deleteFun= {deleteOGTask}
              />
            ))}
            </div>


            <div className="listDiv DroppedItem">
              <p className="listTitle"> Deleted Tasks</p>
              {doneTask.map((element)=>(
              <DroppedItem  id={element.id}
                key={element.id}
                data={element.data}
                date={element.date} />)
              )}
            </div>

          </div>
        </div>
     
  );
}

export default App;
