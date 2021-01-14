import React, {useState} from 'react';
import Header from './components/Header';

function App(){

    function handleAddProject(){
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }

    const [projects, setProjects] = useState(['Desenvolvimento de Apps','Front-end Web']);
    return(
        <>
            <Header title="Projects">
                <ul>
                    {projects.map( project => <li key={project}>{project}</li>)}
                </ul>
                <button type='button' onClick={handleAddProject}>Adicionar Novo</button>
            </Header>
        </>
    )
}

export default App;