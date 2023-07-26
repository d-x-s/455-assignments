
const Cards = require('../models/CardModel');
const asyncHandler = require('express-async-handler');

const createCard = asyncHandler(async (req, res) => {
  if (!req) {
    res.status(400).json({ message: 'card could not be created' });
  }

    const data = {
        name,
        description,
        price,
        imageURL,
        rating,
    } = req.body;

    // add the card to the database
    const card = await Cards.create({
        name: data.name,
        description: data.description,
        price: data.price,
        imageURL: data.imageURL,
        rating: data.rating,
    })

    // send result back to user
    if (card) {
        res.status(201).json({
            _id: card._id,
            name: card.name,
            description: card.description,
            price: card.price,
            imageURL: card.imageURL,
            rating: card.rating
        })
    } else {
        res.status(400).json({ message: 'card could not be created' });
    }
});

const deleteCard = asyncHandler(async (req, res) => {
    // delete the card from the database
    const card = await Cards.findByIdAndDelete(req.body._id);

    // send result back to user
    if (card) {
        res.status(201).json({
        _id: card._id,
        name: card.name,
        description: card.description,
        price: card.price,
        imageURL: card.imageURL,
        rating: card.rating
    })    
    } else {
        res.status(400).json({ message: 'card could not be deleted' });
    }
});

const getCard = asyncHandler(async (req, res) => {
  // Retrieve the card from the database using the ID from the request parameters
  const card = await Cards.findById(req.params.cardId);

  // Send the result back to the user
  if (card) {
    res.status(201).json({
      _id: card._id,
      name: card.name,
      description: card.description,
      price: card.price,
      imageURL: card.imageURL,
      rating: card.rating
    });
  } else {
    res.status(404).json({ message: 'Card not found' });
  }
});

const getAllCards = asyncHandler(async (req, res) => {
    try {
      // Retrieve all cards from the database
      const allCards = await Cards.find({});
      res.json(allCards);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while retrieving all cards.' });
    }
  });

const filterCards = asyncHandler(async (req, res) => {
    const { lessThan, greaterThan } = req.query;
    let filter = {};
  
    if (lessThan) {
      filter.price = { $lt: parseInt(lessThan, 10) };
    } else if (greaterThan) {
      filter.price = { $gt: parseInt(greaterThan, 10) };
    }
  
    try {
      // Retrieve the cards from the database based on the filter
      const filteredCards = await Cards.find(filter);
      res.json(filteredCards);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while filtering cards.' });
    }
  });

module.exports = {
    createCard,
    deleteCard,
    getCard,
    filterCards,
    getAllCards,
}