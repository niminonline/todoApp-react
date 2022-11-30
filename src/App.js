import './css/App.css';
import AddItem from './components/AddItem';
import Header from './components/Header';
import OGList from './components/OGList';
import DoneList from './components/DoneList';
import DroppedList from './components/DroppedList';
import {useState} from 'react'

function App() {

  const [addTask, setAddTask] = useState([{}]);

  function itemAddonClick(task){
    console.log(Date.now() + " "+new Date().toLocaleDateString("en-IN") );
    return setAddTask([...addTask, { id: Date.now(), data: task, date: new Date().toLocaleDateString("en-IN") }]);
    

  }




  return (
    <div className="App">
    <Header />
 
    <AddItem addItemfun={itemAddonClick}/>
      
      <div className="listGroupDiv row">

      <DoneList />
      <OGList />
      <DroppedList />

      
        

        
        



      </div>


    </div>
  );
}

export default App;
