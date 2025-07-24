const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Employee = require('./model/employee'); // Adjust the path as necessary
mongoose.connect('mongodb://localhost:27017/dummyDataGen')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});
app.get('/generate', async (req, res) => {
    for (let i = 0; i <2; i++) {
        const e = new Employee({
            name: `Employee ${i + 1}`,
            email: `employee${i + 1}@example.com`,
            age:Math.floor(Math.random(20, 60)),
            department: `Department ${i + 1}`,
            salary: 50000 + (i * 1000),
            address: `Address ${i + 1}`,
            phone: `123-456-789${i}`,
            position: `Position ${i + 1}`,
            isActive: true

        });
        await e.save();
    }
    res.json({ message: 'employee generated' });
});
app.listen(port, () => {
    console.log(`Example app listening on port${port}`);
});
