import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import './App.css';
import api from './services/api';

function App(){
    async function handleAddProject(){
        // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
        const response =  await api.post('projects', {
            title: `New Project - ${Date.now()}`,
            owner: "Tiago"
        });

        const project = response.data;
        setProjects([...projects, project]);
    }

    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    return(
        <>
            <Header title="Projects">
                <ul>
                    {projects.map( project => <li key={project.id}>{project.title}</li>)}
                </ul>
                <button type='button' onClick={handleAddProject}>Adicionar Novo</button>
            </Header>
        </>
    )
}

export default App;