import { Link } from 'react-router';
import './Header.css';

export function Header() {
  return (
    <>
      <nav className="header">
        <p className="name">Suryavamsi</p>
        <ul className="nav-bar">
          <li>
            <Link to="/" className="nav-items">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-items">About</Link>
          </li>
          <li>
            <Link to="/skills" className="nav-items">Skills</Link>
          </li>
          <li>
            <Link to="projects" className="nav-items">Projects</Link>
          </li>
          <li>
            <Link to="contact" className="nav-items">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}