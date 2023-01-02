import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
<<<<<<< HEAD
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
  }
=======
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
    }
>>>>>>> fc081f0e6d98dac29cad78b1ac01ee07400508f6
)

const Client = mongoose.model('Client', clientSchema)

export default Client