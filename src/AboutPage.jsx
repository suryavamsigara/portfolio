import { Header } from './components/Header';
import './AboutPage.css';

export function AboutPage() {
  return(
    <>
      <title>about</title>

      <Header />

      <div className="home-content">
        <p>
          I am a 3rd-year undergraduate student pursuing Computer Science and Engineering at VIT-AP University. I'm a passionate web developer with a strong foundation in building responsive and user-friendly websites. Alongside web development, I'm actively exploring the fascinating world of Artificial Intelligence and Machine Learning, learning how intelligent systems work and how they can be applied in real-world projects. I am also building AI agents leveraging LLMs.
          Outside of code, I'm deeply enthusiastic about astronomy. I love learning about the universe, black holes, and space exploration, and I'm always curious about the science that governs the cosmos.
        </p>
        <div className="photo-section">
          <img className="avatar" src="./profile-pic.png" />
        </div>
      </div>
    </>
  );
}