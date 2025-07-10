import { dimensionValueTypes } from "framer-motion"

const { useState } = require("react")

const WorkoutForm = ({onAddWorkout}) => {

    const [title, setTitle] = useState("")
    const [reps, setReps] = useState("")
    const [load, setLoads] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = {title, reps, load}
        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok){
            setTitle("")
            setReps("")
            setLoads("")
            setError(null)
            console.log('new workout added')

            //this will reload the page 
            // window.location.reload()
            if(onAddWorkout){
                onAddWorkout(json)

            }
            
        }
    }
    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>

            <label> Excersize Title: </label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} 
            value={title}
            />

            <label> Reps:  </label>
            <input type="number" onChange={(e) => setReps(e.target.value)} 
            value={reps}
            />

            <label> Loads: (in kg) </label>
            <input type="number" onChange={(e) => setLoads(e.target.value)} 
            value={load}
            />

            <button> Add Workout </button>
            {error && <div className="error"> {error}</div>}

        </form>
    )
}


export default WorkoutForm