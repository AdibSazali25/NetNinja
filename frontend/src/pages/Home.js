import { useEffect, useState } from 'react'

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home = () => {

    const[workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workout')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])

    const handleAddWorkout = (newWorkout) => {
        setWorkouts((prevWorkouts) => 
            [ newWorkout, ...prevWorkouts]
        );
    }

    const handleDeleteWorkout  = (id) => {
        setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout._id !== id))
    }


    return (
        <>

        <div className="home">
           <div className="workouts">
            {workouts && workouts.map((workout) => (
                // <p key={workout._id}>{workout.title}</p>
                    <WorkoutDetails key={workout._id} workout={workout} onDelete={handleDeleteWorkout}/>
            ))}
           </div>
           <WorkoutForm onAddWorkout={handleAddWorkout} />
        </div>
        </>
    )
}

export default Home