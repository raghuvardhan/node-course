const express = require('express');
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();

app.use(express.static(path.join(__dirname, '../public'))); 

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Bangalore'
    });
}
);


app.listen(3000, () => {
    console.log('Server is up on port 3000');
})
