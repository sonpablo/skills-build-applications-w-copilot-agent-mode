import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('leaderboard').then(setEntries).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section className="py-5">
      <h1 className="h2">Leaderboard</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="list-group shadow-sm">
        {entries.map((entry) => (
          <div className="list-group-item d-flex justify-content-between" key={entry._id || entry.rank}>
            <span><strong>#{entry.rank}</strong> <span className="ms-2">{entry.user?.name || entry.user}</span></span>
            <span className="fw-semibold">{entry.points} pts</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Leaderboard