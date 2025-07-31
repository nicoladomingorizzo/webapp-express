//importo express
const express = require('express');
// inizializzo express
const app = express();
//creo la costante per la porta
const PORT = process.env.PORT;
//importo il router
const moviesRouter = require('./routes/moviesRouter');
//importo la middleware handleServerError
const handleServerError = require('./middlewares/handleServerError');
//importo la middleware notFoundError
const notFoundError = require('./middlewares/notFoundError');

//middleware per immagini in public
app.use(express.static('public'));

//dichiaro le rotte del router
app.use('/api/movies', moviesRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my movies app')
})

//uso la middleware handleServerError
app.use(handleServerError);

//uso la middleware notFoundError
app.use(notFoundError);

//inizializzo il listen per per il server
app.listen(PORT, () => {
    console.log(`Server is listening http://127.0.0.1:${PORT}`)
});