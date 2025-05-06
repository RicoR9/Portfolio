const express = require('express');
const lessons = require('./services/lessons.js');
const teachers = require('./services/teachers.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const html = (title, content, author = '') => `
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="../styles.css" />
</head>
<body>
    <ul class="nav">
        <li><a href="/">Avaleht</a></li>
        <li><a href="/lessons">Tunnid</a></li>
        <li><a href="/lessons/add">Lisa Tund</a></li>
        <li><a href="/teachers">Õpetajad</a></li>
    </ul>
    <div class="heading">
        <h1>${title}</h1>
        ${content}
        ${author}
    </div>
</body>
</html>
`;

app.get('/', (req, res) => {
    const htmlToSend = html('Tunniplaan', '<h2>Tunniplaani rakendus!</h2>', '<h2>Rico Rimm</h2>');
    return res.send(htmlToSend);
});

app.get('/lessons', (req, res) => {
    const lessonsContent = lessons.map(lesson => `
        <div class="box">
            <h3>${lesson.subject}</h3>
            <p>Ruum: ${lesson.room}</p>
            <p>Kell: ${lesson.time}</p>
            <a href="/lessons/${lesson.id}">Detailsem info</a>
        </div>
    `).join('');
    const htmlToSend = html('Tunnid', `<div class="scrollable-container"><div class="boxes">${lessonsContent}</div></div>`);
    return res.send(htmlToSend);
});

app.get('/lessons/add', (req, res) => {
    const content = `
        <form action="/lessons" method="POST">
            <input type="text" name="subject" placeholder="Sisesta tunni nimi" required />
            <input type="text" name="room" placeholder="Sisesta ruumi number" required />
            <input type="text" name="time" placeholder="Sisesta kellaaeg" required />
            <button type="submit">Lisa tund</button>
        </form>
    `;
    const htmlToSend = html('Lisa Tund', content);
    return res.send(htmlToSend);
});

app.post('/lessons', (req, res) => {
    const { subject, room, time } = req.body;
    const newLesson = {
        id: lessons.length + 1,
        subject,
        room,
        time,
    };

    lessons.push(newLesson); // Lisab uue tunni massiivi

    const lessonsContent = lessons.map(lesson => `
        <div class="box">
            <h3>${lesson.subject}</h3>
            <p>Ruum: ${lesson.room}</p>
            <p>Kell: ${lesson.time}</p>
            <a href="/lessons/${lesson.id}">Detailsem info</a>
        </div>
    `).join('');

    const htmlToSend = html('Tunnid', `<div class="scrollable-container"><div class="boxes">${lessonsContent}</div></div>`);
    return res.send(htmlToSend);
});

app.get('/lessons/:id', (req, res) => {
    const id = Number(req.params.id);
    const lesson = lessons.find(l => l.id === id);
    if (!lesson) {
        return res.status(404).send(
            html(
                'Tund ei leitud',
                `<h1>Tundi id-ga: ${id} ei leitud</h1>`
            )
        );
    }
    const lessonDetails = `
        <h2>${lesson.subject}</h2>
        <p>Ruum: ${lesson.room}</p>
        <p>Kell: ${lesson.time}</p>
        <p>ID: ${lesson.id}</p>
    `;
    const htmlToSend = html(`Tund: ${lesson.subject}`, lessonDetails);
    return res.send(htmlToSend);
});

app.get ('/teachers', (req, res) => {
    const teachersContent = teachers.map(teacher => `
        <div class="box">
            <h3>${teacher.name}</h3>
            <br>
            <p>Email: ${teacher.email}</p>
            <p>Ruum: ${teacher.room}</p>
            <p>Sünniaeg: ${teacher.birthdate}</p>
            <p>Aine: ${teacher.subject}</p>
        </div>
    `).join('');
    const htmlToSend = html('Õpetajad', `<div class="scrollable-container"><div class="boxes">${teachersContent}</div></div>`);
    return res.send(htmlToSend);    
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});