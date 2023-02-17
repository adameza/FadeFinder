const mongoose = require("mongoose");
const clientModel = require("./client");
mongoose.set("debug", true);



async function getClients() {
  let results = await clientModel.find();
  return results;
}


exports.getClients = getClients;