import "./css/App.css";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import OGItem from "./components/OGItem";
import DoneItem from "./components/DoneItem";
import DroppedItem from "./components/DroppedItem";
import React, { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("LocalList")) || []  );

  useEffect(() => {
    localStorage.setItem("LocalList", JSON.stringify(task));
  }, [task]);

  function itemAddonClick(task) {
    console.log("New Item Added to Ongoing List");
    setTask((prevVal) => [
      ...prevVal,
      {
        id: Date.now(),
        data: task,
        list: "OG",
        date: new Date().toLocaleString("en-IN"),
      },
    ]);
  }

  function doneTaskFun(id) {
    setTask([
      ...task.filter((element) => element.id !== id),
      ...task.filter((element) => element.id === id && (element.list = "done")),
    ]);
    //task.map((element)=>(element.id===id)&& (element.list="done"));

    console.log("Task" + id + " moved to finished list");
  }

  function deleteDoneTask(id) {
    if (window.confirm("Are you sure to remove the task?")) {
      setTask([...task.filter((element) => element.id !== id)]);
      console.log("Task " + id + " has been removed");
    }
  }

  function deleteOGTask(id) {
    setTask([
      ...task.filter((element) => element.id !== id),
      ...task.filter(
        (element) => element.id === id && (element.list = "dropped")
      ),
    ]);
    task.map((element) => element.id === id && (element.list = "dropped"));
    console.log("Task " + id + " moved to dropped list");
  }

  function editSaveAction(id, newData) {
    setTask([
      ...task.filter((element) => element.id !== id),
      ...task.filter(
        (element) =>
          element.id === id &&
          ((element.data = newData),
          (element.date = new Date().toLocaleString("en-IN")))
      ),      
    ]);
    document.body.style.backgroundColor= "white";
    // setTask(task.map((element)=>element.id===id&&(element.data=newData)));
  }

  function deleteDroppedTask(id) {
    if (window.confirm("Are you sure to remove the task?") === true) {
      setTask(() => task.filter((element) => element.id !== id));
    }
  }

  function restoreDroppedTask(id) {
    setTask([
      ...task.filter((element) => element.id !== id),
      ...task.filter((element) => element.id === id && (element.list = "OG")),
    ]);

    console.log("Task " + id + " restored to ongoing List");
  }

  return (
    <div className="App">
      <Header />
      <AddItem addItemfun={itemAddonClick} />

      <div className="listGroupDiv row">
        <div className="listDiv DoneItem">
          <p className="listTitle">Finished</p>
          {task
            .filter((elements) => elements.list === "done")
            .map((element) => (
              <DoneItem
                key={element.id}
                id={element.id}
                data={element.data}
                date={element.date}
                deleteDoneItemFun={deleteDoneTask}
              />
            ))}
        </div>

        <div className="listDiv OGItem">
          <p className="listTitle"> Ongoing</p>
          {task
            .filter((elements) => elements.list === "OG")
            .map((element) => (
              <OGItem
                id={element.id}
                key={element.id}
                data={element.data}
                date={element.date}
                deleteFun={deleteOGTask}
                doneFun={doneTaskFun}
                editSaveFun={editSaveAction}
              />
            ))}
        </div>

        <div className="listDiv DroppedItem">
          <p className="listTitle"> Archived</p>
          {task
            .filter((elements) => elements.list === "dropped")
            .map((element) => (
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

// const [ogTask, setOGTask] = useState(JSON.parse(localStorage.getItem("LocalOgList"))||[]);
// const [doneTask, setdoneTask] = useState(JSON.parse(localStorage.getItem("LocalDoneList"))||[]);
// const [droppedTask, setDroppedTask] = useState(JSON.parse(localStorage.getItem("LocalDroppedList"))||[]);
//

// useEffect(()=>{

//   localStorage.setItem("LocalOgList", JSON.stringify(ogTask));
//   localStorage.setItem("LocalDoneList", JSON.stringify(doneTask));
//   localStorage.setItem("LocalDroppedList", JSON.stringify(droppedTask));

// },[ogTask,doneTask,droppedTask])
