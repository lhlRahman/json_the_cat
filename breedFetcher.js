const request = require("request");

const fetchBreedDescription  = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body === "[]") {
      callback(`Sorry, ${breed} not found`, null);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};
module.exports = {
  fetchBreedDescription
};