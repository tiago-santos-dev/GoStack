const express = require('express');
const {uuid} = require('uuidv4');

const app = express();
app.use(express.json());

const projects = [];

app.get('/projects', (_request, response) => {
    return response.json(projects);
});

app.post('/projects', (request, response) => {

    const {title, owner} = request.body;

    const project  = {id : uuid(),title,owner};

    projects.push(project);


    return response.json(project);
});

app.put('/projects/:id', (request, response) => {

    const {title, owner} = request.body;

    const {id} = request.params;
    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({Error : 'Project Not Found'});
    }
    const project = {id,title, owner};

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;
    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({Error : 'Project Not Found'});
    }

    projects.splice(projectIndex,1);

    return response.status(204).send();
});

app.listen(3333);