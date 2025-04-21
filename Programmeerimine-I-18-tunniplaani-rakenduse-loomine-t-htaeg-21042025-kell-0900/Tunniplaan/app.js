const express = require('express');
const lessons = require('./lessons.js');
const teachers = require('./teachers.js');

const app = express();
const port = 3000;

const html = (title, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tunniplaan</title>
    <style>
            body{
            text-align: center;
            background-color:rgb(160, 160, 160);
            color: black;
        }
        ul {
            list-style-type: none;
            padding: 0;
            margin: 30px;
            position: fixed;
            top: 0;
            left: 0; 
            width: 200px;
            height: 100%;
        }
    </style>
</head>
<body>
    <h1>${title}</h1>
    ${content}
    <ul>
        <li><a href="/">Avaleht</a></li>
        <li><a href="/lessons">Tunnid</a></li>
        <li><a href="/teachers">Õpetajad</a></li>
    </ul>
</body>
</html>
`;


app.get('/', (req, res) => {
    const htmlToSend = html('Tunniplaan', '');
    return res.send(htmlToSend);
});

app.get('/lessons', (req, res) => {
    const lessonsContent = lessons.map(lesson => `
        <div>
            <h2>${lesson.subject}</h2>
            <p>Ruum: ${lesson.room}</p>
            <p>Kell: ${lesson.time}</p>
        </div>
    `).join('');
    const htmlToSend = html('Tunnid', lessonsContent);
    return res.send(htmlToSend);
});

app.get('/teachers', (req, res) => {
    const teachersContent = teachers.map(teacher => `
        <div>
            <h2>${teacher.name}</h2>
            <p>${teacher.subject}</p>
            <p>Ruum: ${teacher.room}</p>
        </div>
    `).join('');
    const htmlToSend = html('Õpetajad', teachersContent);
    return res.send(htmlToSend);
});

app.get('/teachers/:id', (req, res) => {
    const id = Number(req.params.id);
    const teacher = teachers.find(t => t.id === id); // Otsib õpetajat id põhjal
    if (!teachers) {
        return res.status(404).send(
            html(
                'Õpetaja ei leitud',
                `<h1>Õpetajat id-ga: ${id} ei leitud</h1>`
            ));
        }

    const teacherContent = `
    <div>
        <h2>${teacher.name}</h2>
            <p>Email: ${teacher.email}</p>
            <p>Ruum: ${teacher.room}</p>
            <p>Sünniaeg: ${teacher.birthdate}</p>
            <p>Aine: ${teacher.subject}</p>
        </div>
    `;
    const htmlToSend = html(`Õpetaja: ${teacher.name}`, teacherContent);
    return res.send(htmlToSend);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});