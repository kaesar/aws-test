const express = require('express');
const Twitter = require('twitter');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 81;

const setting_twitter = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  bearer_token: process.env.BEARER_TOKEN
};
const client = new Twitter(setting_twitter);

app.use('/', express.static(path.join(__dirname, '..', 'public')));

// start the server
app.listen(port, function() {
  console.log('app started on', port);
});

// route our app
app.get('/tweets', async function(req, res) {
  var params = { screen_name: 'jamesdrodriguez', count: 5 };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error)
      return res.json(error);
    
    res.json(tweets);
  });
});
