import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import TaskBoard from "./pages/TaskBoard"
import "./App.css"

function App() {
  const [tarefas, setTarefas] = useState([]);
  /* Criando um useState para title */
  const [title, setTitle] = useState(''); /* Declarando a variável state*/
  /* Criando um useState para text */
  const [text, setText] = useState('');
  
  /* Criando função Adicionar Tarefa */
  function addTask() {
    if (title.trim() === '' || text.trim() === ''){
      return
    }
    const novaTarefa = {
      id: Date.now(),
      title,
      text,
      status: "todo"
    }
    setTarefas([...tarefas, novaTarefa])
    setTitle('')
    setText('')
  }

  /* Criando função de remover tarefa */
  function removeTask(id) {
    const taskFilter = tarefas.filter((tarefa) => tarefa.id !== id)

    setTarefas(taskFilter)
  }

  /* Criando função para concluir a tarefa */
  function toggleTask(id) {
    const taskUpdated = tarefas.map((tarefa) => { // map percorre as tarefas e quando encontra o id retorna uma nova versão dela
      if (tarefa.id === id) {
        let novoStatus

        if (tarefa.status === "todo") {
          novoStatus = "doing"
        } else if (tarefa.status === "doing") {
          novoStatus = "done"
        } else {
          novoStatus = "todo"
        }
        return {
          ...tarefa,
          status: novoStatus
        }
      }
      return tarefa
    })
    setTarefas(taskUpdated)
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
          />}
      />
      <Route
        path="/board"
        element={
          <TaskBoard
            tarefas={tarefas}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />}
      />
    </Routes>
  )
}

export default App