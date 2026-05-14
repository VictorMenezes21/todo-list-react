import Button from "../components/Button"
import { Link } from "react-router-dom"


export default function Home({title, text, setTitle, setText, addTask, theme, toggleTheme}) {
    
    return (
        <main className="app-page">
            <section className="app-container">
                <header className="app-header">
                    <div className="top-bar">
                        <span className="eyebrow">Task Grid</span>
                        <Button
                            onClick={toggleTheme}
                            variant="theme"
                            name={theme === "light" ? "Modo Escuro" : "Modo Claro"}
                        />
                    </div>
                    <h1>Minha to do list</h1>
                    <p>Organize tarefas com uma interface limpa, contrastada e pronta para o fluxo Kanban.</p>
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

                    <Button onClick={ addTask } variant="primary" name="Adicionar"/>
                </section>
                <div className="app-footer">
                    <p className="helper-copy">Cada nova tarefa entra em A Fazer e avanca pelo fluxo.</p>
                    <Link to="/board" className="link-reset">
                        <button className="app-button app-button--secondary">Abrir Kanban</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

