import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";
import About from "./Components/About";
import TaskDetails from "./Components/TaskDetails";
// import React from "react";

const App = () => {
  // const name = "Brad"

  const [showAddTask, setShowAddTask] = useState(false)

  // use useState function to render tasks. 
  // It is immutable unless you use the setTasks function
  const [tasks, setTasks] = useState([]) 

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
  
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks/')
    const data = await res.json()
    console.log(data)
    return data
  }
  
  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task)
    )
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    
    setTasks([...tasks, data])

    
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  return (
    <Router>
      <div className="container">
        {/* <h1>Hello {name}. <br/>You are {1 +34 }</h1> */}

        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />


        <Routes>
          <Route 
            path="/" 
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}

                {tasks.length > 0 ? (
                  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                  ) : (
                    'No Tasks To Show!'
                  )
                }
              </>
            }  
          />

          <Route path="/about" element={<About />} />

          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
