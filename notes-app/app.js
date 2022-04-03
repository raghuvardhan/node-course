const validator = require('validator');
const notes = require('./notes.js');

const note = notes();
console.log(note);  

console.log(validator.isURL('node'));