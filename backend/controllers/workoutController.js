const Workout = require('../models/workoutModel')

//get all workout
//find()
const getAllWorkouts = async(req, res) => {
    try{
        const allWorkout = await Workout.find({}).sort({createAt: -1})
        res.status(200).json(allWorkout)
    }
    catch(error){
        res.status(400).json({error:error.message})

    } 
}

//get one workout 
//findById()
const getOneWorkout = async (req, res) => {

    const {id} = req.params
    try{
        const oneWorkout = await Workout.findById(id)
        res.status(200).json(oneWorkout)
    }
    catch(error){
        res.status(404).json({error:'No such workout'})
    }
}



//delete a workout
//findByIdAndDelete() or findOneAndDelete()
const deleteOneWorkout = async (req, res) => {
    const {id} = req.params

    try{
        const oneWorkout = await Workout.findByIdAndDelete(id)

        if(!oneWorkout){
            res.status(404).json({error:"cant find workout"})
        }
        res.status(200).json(oneWorkout)
    }
    catch(error){
        res.status(400).json({error:'Cant delete a workout'})

    }
}

//update a workout 
//updateOne()
//findOneAndUpdate
const updateOneWorkout = async (req, res) => {
    const {id} = req.params

    try{
        const updateOne = await Workout.findOneAndUpdate({_id:id}, {...req.body}, {new:true})
        res.status(200).json(updateOne)
    }
    catch(error){
        res.status(400).json({error: 'failed to update'})

    }
}


const createWorkout = async(req, res) => {
     const{title, reps, load} = req.body

    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})

    }
}



module.exports = {createWorkout, getAllWorkouts, getOneWorkout, deleteOneWorkout, updateOneWorkout}