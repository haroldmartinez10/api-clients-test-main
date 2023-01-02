import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

mongoose.set('strictQuery', true)

const connectDB = async () => {
<<<<<<< HEAD
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Mongo DB Conectado!')

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
=======
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Mongo DB Conectado!')

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
>>>>>>> fc081f0e6d98dac29cad78b1ac01ee07400508f6
}

export default connectDB