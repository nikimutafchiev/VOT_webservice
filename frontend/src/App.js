import { useEffect, useState } from 'react';
import TaskManager from './components/TaskManager';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([{ "description": "Task1 description", "due": "01-01-2022", "name": "Task1" }, { "description": "Task2 description", "due": "01-01-2023", "name": "Task2" }, { "description": "Task3 description", "due": "01-01-2024", "name": "Task3" }]);
  // const fetchData = () => {
  //   try {
  //     fetch("http://localhost:5000/my_tasks")
  //       .then((response) => response.json())
  //       .then((data) => setData(data))
  //   } catch (e) {
  //     console.error(e)
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/tasks" element={<TaskManager tasks={data} />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
