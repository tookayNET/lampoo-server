'use strict';

const router = require('express').Router();

const cors = require('cors');
router.use(cors());

const wishlist = require('../controller/wishlist.controller.js');

router.get('/wishlist', wishlist.getWishlist);

module.exports = router;