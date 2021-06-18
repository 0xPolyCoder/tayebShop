import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import UserRoutes from './routes/userRoutes.js'
const app = express()
dotenv.config()
app.use(express.json())
connectDB()
app.get('/', (req, res) => {
  res.json({ status: 'API running...' })
})

app.use('/api/products', productRoutes)
app.use('/api/users', UserRoutes)
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} Mode. app listening at http://localhost:${port}`
      .yellow.bold
  )
})
