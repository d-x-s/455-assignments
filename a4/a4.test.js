// Import the necessary modules and dependencies
const request = require('supertest');
const express = require('express');
const { createCard, deleteCard, getCard, filterCards, getAllCards } = require('./server/controllers/cardsController'); // Replace with the actual path to your router file
const Cards = require('./server/models/CardModel'); // Replace with the actual path to your CardModel file

// Create a mock Express app to handle the route
const app = express();
app.use(express.json());
app.get('/database/all', getAllCards);
app.get('/database/retrieve', getCard);
app.post('/database', createCard);
app.delete('/database', deleteCard)

// Create a mock response object to capture the response data
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('get cards', () => {
  it('should respond with all cards from the database', async () => {
    // Create a mock array of cards for testing
    const mockCards = [
      { _id: '1', name: 'Card 1', description: 'Description 1', price: 10 },
      { _id: '2', name: 'Card 2', description: 'Description 2', price: 20 },
    ];

    // Mock the Cards.find() method to return the mock cards
    Cards.find = jest.fn().mockResolvedValue(mockCards);

    // Make a GET request to the route
    const response = await request(app).get('/database/all');

    // Assert the response
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockCards);
  });

  it('should respond with an error when there is an error retrieving cards', async () => {
    // Mock the Cards.find() method to throw an error
    Cards.find = jest.fn().mockRejectedValue(new Error('Database error'));

    // Make a GET request to the route
    const response = await request(app).get('/database/all');

    // Assert the response
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'An error occurred while retrieving all cards.' });
  });

  it('should create a new card in the database', async () => {
    // Create a mock card to be used in the request body
    const newCard = {
      name: 'New Card',
      description: 'New Description',
      price: 30,
      imageURL: 'http://example.com/image.png',
      rating: 4.5,
    };

    // Mock the Cards.create() method to return the mock card
    Cards.create = jest.fn().mockResolvedValue(newCard);

    // Make a POST request to the route
    const response = await request(app).post('/database').send(newCard);

    // Assert the response
    expect(response.status).toBe(201);
    expect(response.body).toEqual(newCard);
  });

  it('should respond with an error when card creation fails', async () => {
    // Mock the Cards.create() method to throw an error
    Cards.create = jest.fn().mockRejectedValue(new Error('Database error'));

    // Make a POST request to the route
    const response = await request(app).post('/database').send({});

    // Assert the response
    expect(response.status).toBe(500);
  });

  it('should delete a card from the database', async () => {
    // Create a mock card to be used in the request body
    const cardToDelete = { _id: '123' };

    // Mock the Cards.findByIdAndDelete() method to return the mock card
    Cards.findByIdAndDelete = jest.fn().mockResolvedValue(cardToDelete);

    // Make a DELETE request to the route
    const response = await request(app).delete('/database').send(cardToDelete);

    // Assert the response
    expect(response.status).toBe(201);
  });

  it('should respond with an error when card deletion fails', async () => {
    // Mock the Cards.findByIdAndDelete() method to throw an error
    Cards.findByIdAndDelete = jest.fn().mockRejectedValue(new Error('Database error'));

    // Make a DELETE request to the route
    const response = await request(app).delete('/database').send({});

    // Assert the response
    expect(response.status).toBe(500);
  });

  it('should retrieve a card from the database', async () => {
    // Create a mock card to be used in the request body
    const cardToRetrieve = { _id: '456', name: 'Retrieved Card' };

    // Mock the Cards.findById() method to return the mock card
    Cards.findById = jest.fn().mockResolvedValue(cardToRetrieve);

    // Make a GET request to the route
    const response = await request(app).get('/database/retrieve').send(cardToRetrieve);

    // Assert the response
    expect(response.status).toBe(201);
  });

  it('should respond with an error when card retrieval fails', async () => {
    // Mock the Cards.findById() method to throw an error
    Cards.findById = jest.fn().mockRejectedValue(new Error('Database error'));

    // Make a GET request to the route
    const response = await request(app).get('/database/retrieve').send({});

    // Assert the response
    expect(response.status).toBe(500);
  });
});
