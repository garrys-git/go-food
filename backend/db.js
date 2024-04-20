const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/gofoodmern";

/* mongoose.connect("mongodb://127.0.0.1:27017/gofoodmern", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err)); */

const mongoDB = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb://127.0.0.1:27017/gofoodmern", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connection successful");
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data
          .find({})
          .toArray()
          .then((data) => {
            const foodCategory =
              mongoose.connection.db.collection("foodCategory");
            foodCategory
              .find({})
              .toArray()
              .then((catData) => {
                global.food_items = data;
                global.foodCategory = catData;
                //console.log(global.foodCategory);
                resolve(); // Resolve the promise after fetching and setting data
              })
              .catch((error) => {
                console.error(error);
                reject(error);
              });
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

module.exports = mongoDB;
