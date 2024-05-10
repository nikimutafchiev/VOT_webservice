import Tasks from './components/Tasks';
import TaskAdder from './components/TaskAdder';
import './App.css';

function App() {
  return (
    <>
      <TaskAdder></TaskAdder>
      <Tasks {...{ tasks: ["Task1", "Task2", "Task3"] }} ></Tasks>
    </>
  );
}

export default App;
