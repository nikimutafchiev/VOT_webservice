import TaskManager from './components/TaskManager';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/tasks" element={<TaskManager tasks={[{ name: "Task1", due: "01-01-2001", description: "Presentation for english class" }, { name: "Task2", due: "04-04-2004" }, { name: "Task3", due: "06-06-2006" }]} />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
