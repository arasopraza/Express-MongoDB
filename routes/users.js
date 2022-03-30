var express = require('express');
var cors = require('cors');
var router = express.Router();
const User = require('../models/User') ;

/* GET users listing. */
router.get('/', async (req, res) => {
  const user = await User.find()
  res.send(user);
});

router.post('/add', async (req, res) => {
  const { username, password } = req.body
  try {
      await User.create({ username, password });
        const response = res.json({
        "message": "success add users"
      });

      return response
  } catch (error) {
      console.log(error)
  }
});

router.

module.exports = router;