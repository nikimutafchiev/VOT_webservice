import Tasks from './components/Tasks';
import TaskAdder from './components/TaskAdder';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <>
      <Login></Login>
      <TaskAdder></TaskAdder>
      <Tasks {...{ tasks: [{ name: "Task1", due: "01-01-2001", description: "Presentation for english class" }, { name: "Task2", due: "04-04-2004" }, { name: "Task3", due: "06-06-2006" }] }} ></Tasks>
    </>
  );
}

export default App;
