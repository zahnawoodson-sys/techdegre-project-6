//1. Importing tools and dependencies
const express = require('express');
const data = require('./data.json');
const app = express();

//2. Setting up the view engine and static files
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

//3. Defining routes (3)

//Home route
app.get('/', (req, res) => {
    res.render('index', { projects: data.projects });
});

//About route
app.get('/about', (req, res) => {
    res.render('about');
});

//Project route
app.get('/project/:id', (req, res) => {
    const projectId = req.params.id;
    const project = data.projects[projectId];

    res.render('project', { project: project });
});

//4. Adding Error handling route
app.use((req, res, next) => {
    console.log('404 Error: Sorry, this page does not exist!');
    res.status(404).send('Page Not Found');
});

//5. Turning the server on (listening on port 3000)
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
