const express = require('express');
const { createCard, deleteCard, getCard, filterCards, getAllCards } = require('../controllers/cardsController');
var router = express.Router();

/* INITIALIZE the database with mock data */

/* POST a new card to the database */
/* /database */
router.post('/', createCard);

/* DELETE a card from the database */
/* /database/cardID */
router.delete('/', deleteCard);

/* GET details for the item */
/* /database/cardID */
router.get('/retrieve', getCard);

/* GET all cards from the database */
/* /database */
router.get('/all', getAllCards);

/* FILTER cards from the database */
/* /database/filter */
router.get('/filter', filterCards);

module.exports = router;