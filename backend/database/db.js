var mongoose = require("mongoose");

const mongoUri =
	"mongodb://localhost:27017/ReactBook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
	mongoose.connect(mongoUri, () => {
		console.log("Connected to MongoDB");
	});
};
module.exports = connectToMongo;
