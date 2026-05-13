import Button from "../components/Button"
import { Link } from "react-router-dom"


export default function Home({title, text, setTitle, setText, addTask}) {
    
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
                <Link to="/board">
                    <button>Kanban</button>
                </Link>
            </section>
        </main>
    )
}

