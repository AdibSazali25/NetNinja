const express = require('express')
const {createWorkout, getAllWorkouts, getOneWorkout, deleteOneWorkout, updateOneWorkout} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkout)

router.post('/', createWorkout)
                                                                
router.delete('/:id', deleteOneWorkout)

router.patch('/:id', updateOneWorkout)






module.exports = router