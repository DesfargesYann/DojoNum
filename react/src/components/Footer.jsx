import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation(); // permet de savoir sur quelle page on est

    return (
        <nav className="bottom-nav">
            <Link to="/" className={location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
                <span className="nav-icon">🏠</span>
                <span className="nav-label">Accueil</span>
            </Link>
            <Link to="/PageProfil" className={location.pathname === '/connexion' ? 'nav-item active' : 'nav-item'}>
                <span className="nav-icon">👤</span>
                <span className="nav-label">Connexion</span>
            </Link>
        </nav>
    );
}