const express = require('express');
const artist_controller = require("../controllers/artistController");
const router = express.Router();

//Get artist string to find
router.get('/', artist_controller.get_artists);
router.get('/:id', artist_controller.get_artist_details);

module.exports = router;
