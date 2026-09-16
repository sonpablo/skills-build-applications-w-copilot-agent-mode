import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('teams').then(setTeams).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section className="py-5">
      <h1 className="h2">Teams</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row g-3">
        {teams.map((team) => (
          <div className="col-md-6" key={team._id || team.name}>
            <article className="card h-100 shadow-sm border-0">
              <div className="card-body"><h2 className="h5">{team.name}</h2><p className="text-secondary mb-0">{team.description}</p><small>{team.members?.length || 0} members</small></div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Teams