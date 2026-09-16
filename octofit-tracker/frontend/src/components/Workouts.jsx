import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('workouts').then(setWorkouts).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section className="py-5">
      <h1 className="h2">Workouts</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row g-3">
        {workouts.map((workout) => (
          <div className="col-md-6" key={workout._id || workout.name}>
            <article className="card h-100 shadow-sm border-0"><div className="card-body"><div className="d-flex justify-content-between gap-3"><h2 className="h5">{workout.name}</h2><span className="badge text-bg-light">{workout.difficulty}</span></div><p className="text-secondary">{workout.description}</p><small>{workout.durationMinutes} minutes</small></div></article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Workouts