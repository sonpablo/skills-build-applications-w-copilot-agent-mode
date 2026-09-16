import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

const links = [
  ['/', 'Overview'],
  ['/activities', 'Activities'],
  ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'],
  ['/users', 'Users'],
  ['/workouts', 'Workouts'],
]

function Overview() {
  return (
    <section className="py-5">
      <p className="text-uppercase small fw-semibold text-primary mb-2">OctoFit Tracker</p>
      <h1 className="display-5 fw-bold">Move with your team.</h1>
      <p className="lead text-secondary col-lg-7">
        Track daily activity, discover workouts, and keep an eye on the leaderboard.
      </p>
      <div className="row g-3 mt-4">
        {links.slice(1).map(([path, label]) => (
          <div className="col-sm-6 col-lg-4" key={path}>
            <NavLink className="card h-100 text-decoration-none shadow-sm" to={path}>
              <div className="card-body">
                <h2 className="h5 text-dark">{label}</h2>
                <span className="text-secondary">Open workspace &rarr;</span>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <header className="border-bottom bg-white">
        <nav className="navbar navbar-expand-lg container py-3" aria-label="Main navigation">
          <NavLink className="navbar-brand fw-bold text-primary" to="/">OctoFit</NavLink>
          <div className="navbar-nav flex-row flex-wrap gap-2 ms-lg-4">
            {links.map(([path, label]) => (
              <NavLink
                className={({ isActive }) => `nav-link px-2 ${isActive ? 'active fw-semibold' : ''}`}
                key={path}
                to={path}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route element={<Overview />} path="/" />
          <Route element={<Activities />} path="/activities" />
          <Route element={<Leaderboard />} path="/leaderboard" />
          <Route element={<Teams />} path="/teams" />
          <Route element={<Users />} path="/users" />
          <Route element={<Workouts />} path="/workouts" />
        </Routes>
      </main>
    </div>
  )
}

export default App