const fs = require('fs');

const data = fs.readFileSync('1-json.json').toString();
const dataJSON = JSON.parse(data);
dataJSON.name = 'Raghu';
dataJSON.age = '25';

fs.writeFileSync('1-json.json', JSON.stringify(dataJSON));
