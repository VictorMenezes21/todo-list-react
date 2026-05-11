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
      status: false
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
        return {
          ...tarefa,
          status: !tarefa.status // inverte o status da nova tarefa (true vira false || false vira true)
        }
      }
      return tarefa
    })
    setTarefas(taskUpdated)
  }

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

        <section className="task-list">
          {tarefas.map((tarefa) => (
            <TaskCard
              key={ tarefa.id }
              tarefa={ tarefa }
              removeTask={ removeTask }
              toggleTask={ toggleTask }
            />
          ))}
        </section>
      </section>
    </main>
  )
}

export default App