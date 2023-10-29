const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// const connectDB = () => {
//   mongoose
//     .connect(process.env.mongoURI)
//     .then(() => {
//       console.log('mongodb connected!');
//     })
//     .catch((err) => {
//       console.error(err.message);
//       process.exit(1);
//     });
// };

module.exports = connectDB;
