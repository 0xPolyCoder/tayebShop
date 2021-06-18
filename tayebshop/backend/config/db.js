import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    console.log(`Connected to the db at ${conn.connection.host}`.cyan.underline)
  } catch (e) {
    console.log(`${e.message}`.red.underline.bold)
  }
}

//const connectDB = async () => {}
export default connectDB
