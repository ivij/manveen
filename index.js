var express = require('express');
var app = express();
const port1 = 3000;
var lightData = 0;

const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('COM5', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
parser.on('data', (light) => {
    console.log(light);
    lightData = light;
    app.get('/', (req, res) => {
        res.send(lightData)
    })
});

app.listen(port1, () => {
    console.log(`Example app listening at http://localhost:${port1}`)
})
