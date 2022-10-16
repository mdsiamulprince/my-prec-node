const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look , I can code node now')
});

const users = [
    { id: 1, name: 'Prince', email: 'mdsiam123prince@gmail.com', phone: '01737277401' },
    { id: 2, name: 'Pinky', email: 'pinky@gmail.com', phone: '01737278901' },
    { id: 3, name: 'Rinky', email: 'rinky@gmail.com', phone: '01737645401' },
    { id: 4, name: 'Tasnim', email: 'tasnim@gmail.com', phone: '01745982908' },
    { id: 5, name: 'Jankar', email: 'jankar@gmail.com', phone: '24589080' },
    { id: 6, name: 'Sumit', email: 'sumit@gmail.com', phone: '1578908867' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('fazle amm flavor');
});

app.listen(port, () => {
    console.log('Listening to port', port);
})