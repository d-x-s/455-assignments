const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    imageURL: {
      type: String,
    },
    rating: {
        type: Number,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Cards', CardSchema);
