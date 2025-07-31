//importo express
const express = require('express');
// inizializzo express
const app = express();
//creo la costante per la porta
const PORT = process.env.PORT;
//importo il router
const moviesRouter = require('./routes/moviesRouter');
//importo connection

//middleware per immagini in public
app.use(express.static('public'));
//dichiaro le rotte del router
app.use('/api/movies', moviesRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my movies app')
})

//inizializzo il listen per per il server
app.listen(PORT, () => {
    console.log(`Server is listening http://127.0.0.1:${PORT}`)
});