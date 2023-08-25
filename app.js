const express = require('express')
const app = express()
const cors = require('cors');

const PORT = 8000;

app.use(cors({
  origin: ['http://localhost:4200'],
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json())
//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));


const router = require('./src/routes/livre.js');

app.use('/api', router);

app.get('/', (req, res) => {
    res.json({message: 'Bienvenue'+PORT})
});

app.listen(PORT, () => {
    console.log('Server en marche '+PORT)
});