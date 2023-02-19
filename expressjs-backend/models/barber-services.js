const mongoose = require("mongoose");
const barberModel = require("./barber");
mongoose.set("debug", true);

require('dotenv').config()


mongoose
  .connect( process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));


async function getBarbers() {
  let results = await barberModel.find();
  return results;
}

async function addBarber(barber) {
  try {
    const barberToAdd = new barberModel(barber);
    const savedBarber = await barberToAdd.save();
    return savedBarber;
  } catch (error) {
    console.log(error);
    return false;
  }
}

exports.getBarbers = getBarbers;
exports.addBarber = addBarber;