import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <h1>Page introuvable</h1>
      <Link to="/">Retourner à l'accueil</Link>
    </>
  )
}

export default Error