import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('/api/users/').then(setUsers).catch((reason) => setError(reason.message))
  }, [])

  return (
    <section className="py-5">
      <h1 className="h2">Users</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row g-3">
        {users.map((user) => (
          <div className="col-md-4" key={user._id || user.username}>
            <article className="card h-100 shadow-sm border-0"><div className="card-body"><span className="badge text-bg-primary mb-3">{user.avatar || user.name?.slice(0, 2)}</span><h2 className="h5">{user.name}</h2><p className="text-secondary mb-0">@{user.username}</p></div></article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Users