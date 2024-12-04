// const os = require('os');
// console.log(os.freemem())
// console.log(os.platform())
// console.log(os.networkInterfaces())
// console.log(os.hostname())
const fs = require('fs');
const second = require('./second');
second();
fs.readFile('data.txt', (err, data) => {
    console.log("this is error ", err, "\n this is data ", data.toString());
})
console.log("this is after the read file");

fs.writeFile('data.txt', 'Hello World', (err) => {
    console.log("this is error ", err);
})

// hAEu1K5TYFP0KcET


// mongodb + srv://fatalegayatri24:hAEu1K5TYFP0KcET@invoice.llq9c.mongodb.net/?retryWrites=true&w=majority&appName=Invoice