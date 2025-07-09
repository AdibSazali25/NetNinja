
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')


const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// app.get('/', (req, res)=> {
//     res.json({mssg: 'Welcome to the app'})
// })
app.use('/api/workout',workoutRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
    console.log('listening to port 5000!!!!')
})
})
.catch((error) => {
    console.log(error)
})



