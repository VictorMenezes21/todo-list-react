import TaskCard from "../components/TaskCard"
import Button from "../components/Button"
import { Link } from "react-router-dom"

export default function TaskBoard({ tarefas, removeTask, toggleTask, moveTaskBack, reopenTask, theme, toggleTheme }) {
  const todoTasks = tarefas.filter((tarefa) => tarefa.status === "todo")
  const doingTasks = tarefas.filter((tarefa) => tarefa.status === "doing")
  const doneTasks = tarefas.filter((tarefa) => tarefa.status === "done")
  const columns = [
    {
      key: "todo",
      title: "A Fazer",
      hint: "Ideias e tarefas prontas para comecar.",
      tasks: todoTasks,
    },
    {
      key: "doing",
      title: "Em Andamento",
      hint: "Itens em execucao no momento.",
      tasks: doingTasks,
    },
    {
      key: "done",
      title: "Concluido",
      hint: "Entregas finalizadas no fluxo.",
      tasks: doneTasks,
    },
  ]

  return (
    <main className="board-page">
      <section className="board-shell">
        <header className="board-header">
          <div>
            <div className="top-bar">
              <span className="eyebrow">Task Board</span>
              <Button
                onClick={toggleTheme}
                variant="theme"
                name={theme === "light" ? "Modo Escuro" : "Modo Claro"}
              />
            </div>
            <h1>Fluxo visual das tarefas</h1>
            <p>Quadro Kanban com tres colunas reais, cards modernos e leitura clara em dark mode.</p>
          </div>
          <div className="board-summary" aria-label="Resumo do quadro">
            <span>{tarefas.length} tarefas</span>
            <span>Fluxo: A Fazer / Em Andamento / Concluido</span>
          </div>
        </header>

        <section className="task-board" aria-label="Quadro kanban">
          {columns.map((column) => (
            <section key={column.key} className={`board-column board-column--${column.key}`}>
              <header className="board-column__header">
                <div>
                  <h2>{column.title}</h2>
                  <p>{column.hint}</p>
                </div>
                <span className="board-column__count">{column.tasks.length}</span>
              </header>

              <div className="board-column__body">
                {column.tasks.length > 0 ? column.tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    tarefa={task}
                    removeTask={removeTask}
                    toggleTask={toggleTask}
                    moveTaskBack={moveTaskBack}
                    reopenTask={reopenTask}
                  />
                )) : (
                  <div className="empty-column">
                    <span className="empty-column__icon">+</span>
                    <p>Nenhuma tarefa nesta etapa.</p>
                  </div>
                )}
              </div>
            </section>
          ))}
        </section>

        <div className="board-footer">
          <p className="helper-copy">Agora cada etapa tem acoes especificas para avancar, voltar ou reabrir tarefas.</p>
          <Link to="/" className="link-reset">
            <button className="app-button app-button--secondary">Voltar</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
