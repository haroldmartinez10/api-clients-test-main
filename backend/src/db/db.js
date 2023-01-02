import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

mongoose.set('strictQuery', true)

const connectDB = async () => {

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
}

export default connectDB
