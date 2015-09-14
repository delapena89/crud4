Project Structure
1- create directory
2- yo galvanize-express
3- npm install
4- npm install mongoose --save
5- npm install dotenv
6- in gitignore add .env
7- app.js in dependencies add
  var dotenv = require('dotenv');
  dotenv.load();
8- create file .env on root level directory

2 Schema
1- define schema
  var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Llama = new Schema ({
  spitter: Boolean,
  name: String,
  age: Number
});

mongoose.connect(process.env.MONGO_URI);


module.exports = mongosse.model("llamas", Llama);

