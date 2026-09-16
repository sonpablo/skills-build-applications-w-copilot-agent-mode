import { useEffect, useState } from 'react'
import { API_BASE_URL, collectionFromResponse } from '../api.js'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/activities/`)
      .then((response) => response.json())
      .then((payload) => setActivities(collectionFromResponse(payload)))
      .catch((reason) => setError(reason.message))
  }, [])

  return (
    <section className="py-5">
      <h1 className="h2">Activities</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="table-responsive bg-white shadow-sm rounded">
        <table className="table mb-0 align-middle">
          <thead><tr><th>Type</th><th>Duration</th><th>Calories</th><th>Distance</th></tr></thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id || `${activity.type}-${activity.performedAt}`}>
                <td className="text-capitalize">{activity.type}</td>
                <td>{activity.durationMinutes} min</td>
                <td>{activity.calories} kcal</td>
                <td>{activity.distanceKm ? `${activity.distanceKm} km` : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Activities