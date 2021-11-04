import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"




function App() {
  const [tasks, setTask] = useState([
    {
        id:1,
        text: 'Doctors Apointment',
        day: ' Feb 5th',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: ' Feb 5th',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: ' Feb 5th',
        reminder: false,
    }
])
  return (
    <div className="App">
      <Header/>
      <Tasks tasks = {tasks}/>
      
    </div>
  );
}

export default App;
