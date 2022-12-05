import "./css/App.css";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import OGItem from "./components/OGItem";
import DoneItem from "./components/DoneItem";
import DroppedItem from "./components/DroppedItem";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("LocalList")) || [] );
  
  useEffect(() => {
    localStorage.setItem("LocalList", JSON.stringify(task));
  }, [task]);

  

let isDoneVisible= task.filter((element)=>element.list==="done").length>0
let isDropVisible=task.filter((element)=>element.list==="dropped").length>0

  function itemAddonClick(task) {
    console.log("New Item Added to Ongoing List");
    setTask((prevVal) => [
      ...prevVal,
      {
        id: Date.now(),
        data: task,
        list: "OG",
        date: new Date().toLocaleString("en-IN"),
        priority:0
      },
    ]);
  }

  function doneTaskFun(id) {
    setTask(
      task.map((element) =>
        element.id === id ? { ...element, list: "done" } : element
      )
    );
    console.log("Task" + id + " moved to finished list");
  }

  function deleteDoneTask(id) {
    if (window.confirm("Are you sure to remove the task?")) {
      setTask([...task.filter((element) => element.id !== id)]);
      console.log("Task " + id + " has been removed");
    }
  }

  function deleteOGTask(id) {
    setTask(
      task.map((element) =>
        element.id === id ? { ...element, list: "dropped" } : element
      )
    );
    console.log("Task " + id + " moved to dropped list");
  }

  function editSaveAction(id, newData) {
    setTask(
      task.map((element) =>
        element.id === id
          ? {...element,data: newData, date: new Date().toLocaleString("en-IN") }: element)
    );
  }

  function priorityUp(id){

    setTask(task.map((element)=>element.id===id?{...element,priority:element.priority+1}:element)
    .sort((a,b)=>(b.priority-a.priority)));

  }
  function priorityDown(id){

    setTask(task.map((element)=>element.id===id?{...element,priority:element.priority-1}:element)
    .sort((a,b)=>(a.priority-b.priority)));

  }
  function deleteDroppedTask(id) {
    if (window.confirm("Are you sure to remove the task?") === true) {
      setTask(() => task.filter((element) => element.id !== id));
    }
  }

  function restoreDroppedTask(id) {
    setTask(
      task.map((element) =>
        element.id === id ? { ...element, list: "OG" } : element
      )
    );

    console.log("Task " + id + " restored to ongoing List");
  }

  return (
    <div className="App">
      <button
        className="floatingReset fa-solid fa-rotate"
        header="Reset Data"
        onClick={() =>
          window.confirm("Are you sure to want to clear the data?") &&
          setTask([])
        }
      ></button>
      <Header />
      <AddItem addItemfun={itemAddonClick} />
      <div className="listGroupDiv row">
    
        <div className="listDiv DoneItem " style={{visibility: isDoneVisible? "visible" : "hidden"}}>
          <p className="listTitle">Finished</p>
          {task
            .filter((elements) => elements.list === "done")
            .map((element) => (
              <DoneItem
                key={element.id}
                id={element.id}
                data={element.data}
                date={element.date}
                priority ={element.priority}
                deleteDoneItemFun={deleteDoneTask}
              />
            ))}
        </div>

        <div className="listDiv OGItem ">
          <p className="listTitle"> Ongoing</p>
          {task
            .filter((elements) => elements.list === "OG")
            .map((element) => (
              <OGItem
                id={element.id}
                key={element.id}
                data={element.data}
                date={element.date}
                priority ={element.priority}
                deleteFun={deleteOGTask}
                doneFun={doneTaskFun}
                editSaveFun={editSaveAction}
                priorityUpFun={priorityUp}
                priorityDownFun={priorityDown}

              />
            ))}
        </div>

       

        <div className="listDiv DroppedItem" style={{visibility: isDropVisible? "visible" : "hidden"}}>
          <p className="listTitle"> Archived</p>
          {task
            .filter((elements) => elements.list === "dropped")
            .map((element) => (
              <DroppedItem
                id={element.id}
                key={element.id}
                data={element.data}
                date={element.date}
                priority ={element.priority}
                deleteFun={deleteDroppedTask}
                restoreFun={restoreDroppedTask}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
