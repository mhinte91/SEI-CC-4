const Movie = require('../../models/movie');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
}

function deleteOne(req, res) {
    Movie.findByIdAndRemove(req.params.id).then(function(mov) {
        res.status(200).json(mov);
    })
}

function update(req, res) {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(function(pup) {
        res.status(200).json(pup);
    })
}

function show(req, res) {
    Movie.findById(req.params.id).then(function(mov) {
        res.status(200).json(pup);
    })
}

function create(req, res) {
    Movie.create(req.body).then(function(mov) {
        res.status(201).json(pup);
    })
}

function index(req, res, next) {
    Movie.find().then(function(movies) {
        res.status(200).json(movies);
    }).catch(function(err) {
        res.status(500).json(err);
    })
}