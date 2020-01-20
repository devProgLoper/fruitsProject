//jshint esversion: 6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  rating: 10,
  review: "Peaches are so yummy!"
});

 // fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit ({
  name: "Mango",
  score: 6,
  review: "Decent fruit."
});

mango.save();

Person.update({name: "John"}, {favoriteFruit: mango}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});

// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });
//
// person.save();

const kiwi = new Fruit ({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
});

const orange = new Fruit ({
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});

const banana = new Fruit ({
  name: "Banana",
  score: 3,
  review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });


Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "5da3ba00a0307c116ca80056"}, {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

// Fruit.deleteOne({_id : "5da3b008d0cf9312d456ec2a"}, function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully deleted the document");
//     }
// });

// Person.deleteMany({name: "John"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the documents")
//   }
// });
