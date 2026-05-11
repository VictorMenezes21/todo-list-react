import { useState } from "react"
import TaskCard from "./components/TaskCard";
import Button from "./components/Button";
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

  const todoTasks = tarefas.filter((tarefa) => tarefa.status === "todo")
  const doingTasks = tarefas.filter((tarefa) => tarefa.status === "doing")
  const doneTasks = tarefas.filter((tarefa) => tarefa.status === "done")

  return (
    <main className="app-page">
      <section className="app-container">
          <header className="app-header">
            <h1>Minha to do list</h1>
            <p>Organize suas tarefas do dia!</p>
          </header>

        <section className="task-form">   
          <div className="input-group">
          <label>
            Title: 
            <input
              value={ title } /* O valor do input pertence ao React agora */
              onChange={e => setTitle(e.target.value)} /* Toda vez que o usuário digitar  e = event (evento) */
              placeholder="Ex: Estudar React"
            />
          </label>
          </div>

          <div className="input-group">
          <label>
            Description: 
            <textarea 
            value={ text }
            onChange={e => setText(e.target.value)}
            placeholder="Ex: Revisar useState e props">              
            </textarea>
          </label>
          </div>

          <Button onClick={ addTask } name="Adicionar"/>
        </section>

        <section className="tark-board">
          <div className="todo-column">
            <h2>A Fazer</h2>
            {todoTasks.map((todo) => (
              <TaskCard
                key={ todo.id }
                tarefa={ todo }
                removeTask={ removeTask }
                toggleTask={ toggleTask }
              />
            ))}
          </div>
          <div className="doing-column">
            <h2>Em Progresso</h2>
            {doingTasks.map((doing) => (
              <TaskCard
                key={ doing.id }
                tarefa={ doing }
                removeTask={ removeTask }
                toggleTask={ toggleTask }
              />
            ))}
          </div>
          <div className="done-column">
            <h2>Feito</h2>
            {doneTasks.map((done) => (
              <TaskCard
                key={ done.id }
                tarefa={ done }
                removeTask={ removeTask }
                toggleTask={ toggleTask }
              />
            ))}
          </div>
            
        </section>
      </section>
    </main>
  )
}

export default App