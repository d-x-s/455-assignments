var express = require('express');
var router = express.Router();
let data = require('../data/mock.json');

/* GET the mock object */
router.get('/data', function(req, res, next) {
  res.send(data);
});

/* GET a list of all cards */
router.get('/', function(req, res, next) {
  const cards = Object.values(data).flat();
  res.send(cards);
});

/* GET cards with price less than param */
router.get('/filter', function(req, res) {
  const { lessThan, greaterThan } = req.query;
  let filteredCards = [];

  // Convert the object of cards into an array
  const cardsArray = Object.values(data);
  console.log(data);
  console.log(cardsArray);

  if (lessThan) {
    filteredCards = cardsArray.filter(card => parseInt(card.price) < parseInt(lessThan, 10));
  } else if (greaterThan) {
    filteredCards = cardsArray.filter(card => parseInt(card.price) > parseInt(greaterThan, 10));
  } else {
    filteredCards = cardsArray;
  }

  console.log(filteredCards);
  res.json(filteredCards);
});

/* POST a new card */
router.post('/', (req, res) => {
  const card = {
    key,
    name,
    description,
    price,
    imageUrl
  } = req.body;

  data[key] = card;
  res.status(201).json(card);
});

/* PUT to update a card with key */
router.put('/:keyID', (req, res) => {
  const { keyID } = req.params;
  const {
    key,
    name,
    description,
    price,
    imageUrl
  } = req.body;

  if (data[keyID]) {
    data[keyID] = {
      ...data[keyID],
      name,
      description,
      price,
      imageUrl
    };
    res.json(data[key]);
  } else {
    res.status(404).json({ error: 'card not found' })
  }
});

/* DELETE to delete a card with key */
router.delete('/:keyID', (req, res) => {
  const { keyID } = req.params;

  if (data[keyID]) {
    delete data[keyID];
    res.json(keyID);
  } else {
    res.status(404).json({ error: 'card not found' })
  }
});

module.exports = router;
