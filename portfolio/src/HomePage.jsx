import { Header } from './components/Header';
import './HomePage.css';

export function HomePage() {
  const openLink = ((link) => {
    window.open(link, "_blank");
  });

  return (
    <>
      <title>Home</title>

      <Header />

      <div className="home-content">
        <div className="text-section">
          <h1>Hi There,</h1>
          <h1>I'm <span className="highlight">Surya Vamsi</span></h1>
          <p>I Am Into Web Development, AI/ML, Space</p>
          <div className="logos-container">
            <button
              className="logo-button"
              onClick={() => {openLink('https://github.com/suryavamsigara?tab=repositories')}}
            >
              <img className="logo" src="./github-logo.png"></img>
            </button>
            <button
              className="logo-button"
              onClick={() => {openLink('https://www.linkedin.com/in/surya-vamsi-gara-60201923b/')}}
            >
              <img className="logo" src="./linkedin-logo.png"></img>
            </button>
          </div>
        </div>

        <div className="photo-section">
          <img className="avatar" src="./profile-pic.png" />
        </div>
      </div>
    </>
  );
}