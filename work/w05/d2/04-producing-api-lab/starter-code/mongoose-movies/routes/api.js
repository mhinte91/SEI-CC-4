var express = require('express');
var router = express.Router();
var moviesApiCtrl = require('../controllers/api/movies');

router.get('/movies', moviesApiCtrl.index);
router.get('/movies/:id', moviesApiCtrl.show);
router.post('/movies', moviesApiCtrl.create);
router.put('/movies/:id', moviesApiCtrl.update);
router.delete('/movies/:id', moviesApiCtrl.delete);

module.exports = router;