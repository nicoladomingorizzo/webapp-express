//importo connection.js
const connection = require('../database/connection');

//definisco le rotte che poi andrò ad usare in router

function index(req, res) {
    const sql = 'SELECT * FROM movies';
    connection.execute(sql, (err, result) => {
        if (err) return res.status(500).json({
            error: true,
            message: err.message
        })
        //faccio un map per passare il percorso alle immagini per renderle visualizzabili
        result.map(item => item.image = `http://localhost:3030/movies_cover/${item.image}`);
        res.json(result)
    })
}

function show(req, res) {
    const { id } = req.params;
    const sql = 'SELECT * FROM movies WHERE id = ?';
    connection.execute(sql, [id], (err, result) => {
        if (err) return res.status(500).json({
            error: true,
            message: err.message
        })
        if (result.length === 0) {
            return res.status(404).json({
                error: true,
                message: 'Not Found'
            })
        }
        const movie = result[0];
        const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?';
        connection.execute(reviewsSql, [id], (err, result) => {
            if (err) return res.status(500).json({
                error: true,
                message: err.message
            })
            const movieReviews = result;
            movie.result = movieReviews;
            //passo il percorso delle immagini per renderle visualizzabili
            movie.image = `http://localhost:3030/movies_cover/${movie.image}`;
            res.json(movie);
        })
    })
}

module.exports = {
    index,
    show
};