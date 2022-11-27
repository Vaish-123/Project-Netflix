const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        password: String
    },
    { timestamps: true }
);
const User = mongoose.model('Netflix', userSchema)
module.exports = User;