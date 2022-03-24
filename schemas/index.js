const mongoose = require("mongoose");

const connect = () => {
    mongoose
      .connect("mongodb+srv://test:sparta@cluster0.qjqnl.mongodb.net/", {ignoreUndefined: true})
      .catch(err => console.error());
  };

  module.exports = connect;
  