import { Header } from './components/Header';
import './ContactPage.css';

export function ContactPage() {
  const openLink = ((link) => {
    window.open(link, "_blank");
  });

  return (
    <>
      <title>Contact</title>
      <Header />

      <div className="home-content">
        <div className="contact-container">
          <h1 className="contact-title">Get in Touch</h1>
          <div className="contact-card">
            <p><strong>Personal Email:</strong> suryavamsigara2@gmail.com</p>
            <p><strong>College Email:</strong> surya.23bce9591@vitapstudent.ac.in</p>
            <p><strong>📱 Phone:</strong> +91 91826 28956</p>
            <div className="logos-container">
              <button
                className="logo-button"
                onClick={() => { openLink('https://github.com/suryavamsigara?tab=repositories') }}
              >
                <img className="logo" src="./github-logo.png"></img>
              </button>

              <button
                className="logo-button"
                onClick={() => { openLink('https://www.linkedin.com/in/surya-vamsi-gara-60201923b/') }}
              >
                <img className="logo" src="./linkedin-logo.png"></img>
              </button>

              <button
                className="logo-button"
                onClick={() => { openLink('https://x.com/suryavamsiii') }}
              >
                <img className="logo" src="./x-logo.png"></img>
              </button>
            </div>
          </div>
        </div>

        <div className="photo-section">
          <img className="avatar" src="./profile-pic.png" />
        </div>
      </div>
    </>
  );
}
