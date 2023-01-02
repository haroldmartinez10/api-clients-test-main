import mongoose from "mongoose";

const clientSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  document: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  }

},
  {
    timestamps: true,
    versionKey: false,
  })

const Client = mongoose.model('Client', clientSchema)

export default Client
