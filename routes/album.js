const express =  require('express');
const album_controller =  require('../controllers/albumController');
const router =  express.Router();

router.get('/:id', album_controller.album_details);


module.exports = router;