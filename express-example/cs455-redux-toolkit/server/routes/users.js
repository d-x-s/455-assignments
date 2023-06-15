var express = require('express');
var router = express.Router();

let users = [
  {id: '1', name: "Stephanie"},
  {id: '2', name: "Davis"},
  {id: '3', name: "Kisato"},
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.get('/:id', function(req, res, next) {
  const userId = req.params.id;
  const foundUser = users.find(user => user.id === userId);

  return res.send(foundUser);
})

router.post('/', function(req, res, next) {
  users.push(req.body);
  res.status(201);
  res.send(users);
})

module.exports = router;
