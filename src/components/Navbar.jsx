import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: '/home',       label: 'Home' },
    { to: '/recipes',    label: 'Recipes' },
    { to: '/favorites',  label: 'Favorite' },
    { to: '/how-to-guides', label: 'Guides' },
    { to: '/substitutions', label: 'Substitutes' },
    { to: '/profile',    label: 'Profile' },
    { to: '/about',      label: 'About' },
    { to: '/add-recipe', label: 'Add Recipe' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <i className="fas fa-utensils me-2"></i>Delicious Recipes
        </Link>
        {location.pathname !== '/' && (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {links.map((link, i) => (
                  <li className="nav-item" key={i}>
                    <Link
                      className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                      to={link.to}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
