import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutHeader = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <header>
      <nav className="navStyle">
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <button className="logButton" onClick={() => loginWithRedirect()}>
          {' '}
          Sign Up/Log In
        </button>
      </nav>
    </header>
  )
}

export default LogoutHeader
