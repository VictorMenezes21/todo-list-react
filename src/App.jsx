import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import TaskBoard from "./pages/TaskBoard"
import "./App.css"

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme
    }

    return "dark"
  })

  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas")

    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas)
    }

    return []
  })

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  function addTask() {
    if (title.trim() === "" || text.trim() === "") {
      return
    }

    const novaTarefa = {
      id: Date.now(),
      title,
      text,
      status: "todo",
    }

    setTarefas([...tarefas, novaTarefa])
    setTitle("")
    setText("")
  }

  function removeTask(id) {
    const taskFilter = tarefas.filter((tarefa) => tarefa.id !== id)
    setTarefas(taskFilter)
  }

  function updateTaskStatus(id, status) {
    const taskUpdated = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          status,
        }
      }

      return tarefa
    })

    setTarefas(taskUpdated)
  }

  function toggleTask(id) {
    const tarefa = tarefas.find((item) => item.id === id)

    if (!tarefa) {
      return
    }

    if (tarefa.status === "todo") {
      updateTaskStatus(id, "doing")
    } else if (tarefa.status === "doing") {
      updateTaskStatus(id, "done")
    }
  }

  function moveTaskBack(id) {
    updateTaskStatus(id, "todo")
  }

  function reopenTask(id) {
    updateTaskStatus(id, "todo")
  }

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }, [tarefas])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            title={title}
            text={text}
            setTitle={setTitle}
            setText={setText}
            addTask={addTask}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        }
      />
      <Route
        path="/board"
        element={
          <TaskBoard
            tarefas={tarefas}
            removeTask={removeTask}
            toggleTask={toggleTask}
            moveTaskBack={moveTaskBack}
            reopenTask={reopenTask}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        }
      />
    </Routes>
  )
}

export default App
