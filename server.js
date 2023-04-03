const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Trip = require('./models/trip.js')
const cors = require('cors')

app.use(express.json()); //use .json(), not .urlencoded()
app.use(cors())

//index route 
app.get('/logs', (req, res) => {
    Trip.find({}).then((foundTrips) => {
        res.json(foundTrips)
    })
})

//create route
app.post('/logs', (req, res) => {
    Trip.create(req.body).then((createdTrip) => {
        res.json(createdTrip);
    })
}) 

//update route
app.put('/logs/:id', (req, res) => {
    Trip.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedTrip) => {
        res.json(updatedTrip);
    })
})










//server
app.listen(3000, ()=>{
    console.log('listening...');
});
mongoose.connect('mongodb://localhost:27017/peoplecrud')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});