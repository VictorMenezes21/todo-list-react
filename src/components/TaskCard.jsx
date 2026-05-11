import Button from "./Button"

export default function TaskCard({ tarefa, removeTask, toggleTask }) {
  return (
    <div className="task-card">
        <h1 className={tarefa.status === "done" ? "completed" : ""}>{ tarefa.title }</h1>
        <p className={tarefa.status === "done" ? "completed" : ""}>{ tarefa.text }</p>
        
        <div className="task-actions">
          {tarefa.status !== "done" && (
            <Button onClick={() => toggleTask(tarefa.id)} name={
              tarefa.status === "todo"
              ? "Iniciar"
              : "Concluir"
            }/>)}
          <Button onClick={() => removeTask(tarefa.id) } name="Remover"/>
        </div>
        
    </div>
  )
}
 
