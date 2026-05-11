import Button from "../components/Button"

export default function Home({title, text, setTitle, setText, addTask}) {

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
            </section>
        </main>
    )
}

