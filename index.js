var express = require('express');
var app = express();
const port1 = 3000;
var lighteData = 0;

const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('COM5', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
parser.on('data', (ligh) => {
    console.log(ligh);
    ligheData = ligh;
    app.get('/', (req, res) => {
        res.send(lighData)
    })
});

app.listen(port1, () => {
    console.log(`Example app listening at http://localhost:${port1}`)
})
