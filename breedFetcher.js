const request = require("request");
const input = process.argv[2];

const getCat = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log(`ERRROORR !!!!! \n ${error}`);
    } else if (body === "[]") {
      console.log("Breed Not Found!");
    } else {
      const data = JSON.parse(body);
      console.log(`\n ${data[0].description} \n`);
    }
  });
};

getCat(input);
