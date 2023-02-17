const mongoose = require("mongoose");
const appointmentModel = require("./appointment");
mongoose.set("debug", true);



async function getClients() {
  let results = await appointmentModel.find();
  return results;
}


exports.getClients = getClients;