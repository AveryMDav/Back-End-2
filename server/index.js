const express = require('express');
const cors = require('cors');
const app = express();
const ctrl = require('./controller');

const { getAllhouses, createHouse, deleteHouse, updateHouse } = ctrl;

app.use(express.json());
app.use(cors());

app.get('/api/houses', getAllhouses);
app.delete('/api/houses/:houseId', deleteHouse);
app.post('/api/houses', createHouse);
app.put('/api/houses/:Id', updateHouse);


const SERVER_PORT = 4004;
app.listen(SERVER_PORT, function(){console.log(`*Hacker Voice* We are in ${SERVER_PORT}`)});