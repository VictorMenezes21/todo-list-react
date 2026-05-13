import TaskCard from "../components/TaskCard"
import { Link } from "react-router-dom"

export default function TaskBoard({tarefas, removeTask, toggleTask}) {

    const todoTasks = tarefas.filter((tarefa) => tarefa.status === "todo")
    const doingTasks = tarefas.filter((tarefa) => tarefa.status === "doing")
    const doneTasks = tarefas.filter((tarefa) => tarefa.status === "done")

    return (
        <main className="task-board">
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
            <Link to="/">
                <button>Voltar</button>
            </Link>          
        </main>
    )
}

