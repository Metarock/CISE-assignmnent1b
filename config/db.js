/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/newline-after-import */
const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
