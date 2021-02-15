const express = require('express');
const cors = require('cors');
const { validate, v4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

function logRequests (request, response, next){
    const {method, url} = request;
    
    const logLabel = `[${method.toUpperCase()}] ${url}`;
    console.log(logLabel);
    
    console.time(logLabel);
    
    next();
    
    console.timeEnd(logLabel);
}

function validateId(request, response, next){
    const id = request.params;

    if(!validate(id)){
        return response.status(400).json({error : "Invalid Project ID"});
    }

    return next();
}

app.use(logRequests);
app.use('/projects/:id', validateId);

const projects = [];

app.get('/projects', (_request, response) => {
    return response.json(projects);
});

app.post('/projects', (request, response) => {

    const {title, owner} = request.body;

    const project  = {id : v4(),title,owner};

    projects.push(project);


    return response.status(201).json(project);
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