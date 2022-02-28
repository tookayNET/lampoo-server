const db = require('../db.js')

const getWishlist = (req, res) => {
  try {
    res.status(200);
    res.json(db);
  } catch (error) {
    console.log('Error: ', error);
    res.sendStatus(500);
  }
}

module.exports = { getWishlist }