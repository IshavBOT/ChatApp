import express from 'express'
import dotenv from 'dotenv'
const PORT = process.env.PORT || 5000
dotenv.config()
const app = express()
app.use(express.json())

import authRoutes from './routes/auth.routes.js'
import connectToMongoose from './db/connectToMongoDB.js'

app.get('/',(req,res)=>{
    res.send("Helllo World Ishav")
})

app.use('/api/auth',authRoutes);

app.listen(PORT ,()=> {
    connectToMongoose()
    console.log('Server is running on port '+ PORT)
})