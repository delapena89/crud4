var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Llama = new Schema ({
  spitter: Boolean,
  name: String,
  age: Number
});

mongoose.connect(process.env.MONGO_URI);


module.exports = mongosse.model("llamas", Llama);
