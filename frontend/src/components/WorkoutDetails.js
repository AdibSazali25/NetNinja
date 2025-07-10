const WorkoutDetails = ({workout, onDelete}) => {


    const handleClick = async () => {
        const response = await fetch('/api/workout/' + workout._id, {
                method: 'DELETE'
        });
        const json = await response.json()

        if(response.ok){
            console.log('Workout deleted');
        }
        if(onDelete){
            onDelete(workout._id)
        }
    }
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>Load: {workout.load}</p>
            <p>Reps: {workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails