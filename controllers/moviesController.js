//importo connection.js
const connection = require('../database/connection');

//definisco le rotte che poi andrò ad usare in router

function index(req, res) {
    const sql = 'SELECt * FROM movies';
    connection.execute(sql, (err, result) => {
        if (err) return res.status(500).json({
            error: true,
            message: err.message
        })
        // console.log(result);
        res.json(result)
    })
}

function show(req, res) {

}

module.exports = {
    index,
    show
}