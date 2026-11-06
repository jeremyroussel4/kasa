import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'
import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <Link to="/" aria-label="Kasa - Accueil">
        <img className="site-logo" src={logo} alt="Kasa" />
      </Link>
      <nav aria-label="Navigation principale">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  )
}

export default Header