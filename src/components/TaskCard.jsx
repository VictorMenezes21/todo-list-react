import Button from "./Button"

export default function TaskCard({ tarefa, removeTask, toggleTask }) {
  return (
    <div>
        <h1 className={tarefa.status ? "completed" : ""}>{ tarefa.title }</h1>
        <p className={tarefa.status ? "completed" : ""}>{ tarefa.text }</p>
        
        <Button onClick={() => toggleTask(tarefa.id)} name={tarefa.status ? "Desfazer" : "Concluir"}/>
        <Button onClick={() => removeTask(tarefa.id) } name="Remove"/>
    </div>
  )
}
 