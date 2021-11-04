import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"




function App() {
  const [tasks, setTasks] = useState([
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

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}


  return (
    <div className="App">
      <Header/>
      <Tasks tasks = {tasks} onDelete={deleteTask}/>
      
    </div>
  );
}

export default App;
