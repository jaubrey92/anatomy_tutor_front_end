import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
  const { logout } = useAuth0()

  return (
    <header>
      <nav className="navStyle">
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |{' '}
        <Link to="/add">Add a Muscle</Link> |
        <Link to="/view/cards">All Muscles</Link> |
        <Link to="/view/region">Body Regions</Link> |
        <button className="logButton" onClick={() => logout()}>
          Logout
        </button>
      </nav>
    </header>
  )
}

export default Header
