import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
const PORT = process.env.PORT || 5000
dotenv.config()


import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoose from './db/connectToMongoDB.js'
import { app, server } from './socket/socket.js'


app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes)

server.listen(PORT ,()=> {
    connectToMongoose()
    console.log('Server is running on port '+ PORT)
})