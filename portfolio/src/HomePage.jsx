import { Header } from './components/Header';
import './HomePage.css';

export function HomePage() {
  return (
    <>
      <title>Home</title>

      <Header />

      <div className="home-content">
        <div className="text-section">
          <h1>Hi There,</h1>
          <h1>I'm <span className="highlight">Surya Vamsi</span></h1>
          <p>I Am Into Web Development, AI/ML, Space</p>
          <button className="about-button">About Me</button>
        </div>

        <div className="photo-section">
          <img className="avatar" src="./profile-pic.png" />
        </div>
      </div>
    </>
  );
}