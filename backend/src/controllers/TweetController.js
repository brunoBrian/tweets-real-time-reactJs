const Tweet = require('../models/Tweet');

module.exports = {
  async index(req, res) {
    // Pode receber varios parametros, só olhar na documentação mongoose (parametro para paginação, etc)
    const tweets = await Tweet.find({}).sort('-createdAt');

    return res.json(tweets);
  },

  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);

    return res.json(tweet);
  }
};