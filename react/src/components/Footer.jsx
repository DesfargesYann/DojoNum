import { Link, useLocation } from 'react-router-dom';
import { estConnecte, deconnexion } from '../api/questionService';

export default function Footer() {
    const location = useLocation(); // permet de savoir sur quelle page on est
    const connecte = estConnecte();

  return (
      <nav className="bottom-nav">
          <Link to="/" className={location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
              <span className="nav-icon">🏠</span>
              <span className="nav-label">Accueil</span>
          </Link>
          <Link to="/PageQuiz" className={location.pathname === '/PageQuiz' ? 'nav-item active' : 'nav-item'}>
              <span className="nav-icon">❓</span>
              <span className="nav-label">Quiz</span>
          </Link>
          {connecte &&
          <Link to="/PageResultat" className={location.pathname === '/PageResultat' ? 'nav-item active' : 'nav-item'}>
              <span className="nav-icon">📊</span>
              <span className="nav-label">Résultats</span>
          </Link>
          }
          {
            connecte ? 
            <button className="nav-item" onClick={() => { deconnexion(); window.location.reload(); }}>
                    <span className="nav-icon">🚪</span>
                    <span className="nav-label">Déconnexion</span>
            </button>
                :
          <Link to="/PageProfil" className={location.pathname === '/PageProfil' ? 'nav-item active' : 'nav-item'}>
              <span className="nav-icon">👤</span>
              <span className="nav-label">Connexion</span>
          </Link>
          }

      </nav>
  );
}