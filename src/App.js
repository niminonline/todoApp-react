import './css/App.css';
import AddItem from './components/AddItem';
import Header from './components/Header';
import OGList from './components/OGList';
import DoneList from './components/DoneList';
import DroppedList from './components/DroppedList';

function App() {
  return (
    <div className="App">
    <Header />

    <AddItem />
      
      <div className="listGroupDiv row">

      <DoneList />
      <OGList />
      <DroppedList />

      
        

        
        



      </div>


    </div>
  );
}

export default App;
