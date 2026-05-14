import Button from "./Button"

export default function TaskCard({ tarefa, removeTask, toggleTask, moveTaskBack, reopenTask }) {
  const statusLabel = {
    todo: "A Fazer",
    doing: "Em Andamento",
    done: "Concluido",
  }

  return (
    <article className={`task-card task-card--${tarefa.status}`}>
      <div className="task-card__tape" aria-hidden="true"></div>
      <div className="task-card__meta">
        <span className="task-card__badge">{statusLabel[tarefa.status]}</span>
        <span className="task-card__drag" aria-hidden="true">:::</span>
      </div>
      <h1 className={tarefa.status === "done" ? "completed" : ""}>{tarefa.title}</h1>
      <p className={tarefa.status === "done" ? "completed" : ""}>{tarefa.text}</p>

      <div className="task-actions">
        {tarefa.status === "todo" && (
          <Button onClick={() => toggleTask(tarefa.id)} variant="primary" name="Iniciar" />
        )}
        {tarefa.status === "doing" && (
          <>
            <Button onClick={() => moveTaskBack(tarefa.id)} variant="secondary" name="Voltar" />
            <Button onClick={() => toggleTask(tarefa.id)} variant="primary" name="Concluir" />
          </>
        )}
        {tarefa.status === "done" && (
          <Button onClick={() => reopenTask(tarefa.id)} variant="secondary" name="Reabrir" />
        )}
        <Button onClick={() => removeTask(tarefa.id)} variant="danger" name="Remover" />
      </div>
    </article>
  )
}
