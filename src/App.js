import { useState } from 'react';
import './App.css';
import logoImage from './logo.png';
import eventImage from './eventImage.png';  

const navItems = ['Home', 'Aims', 'About', 'Events'];

const sampleEvents = [
  { title: "Tree Plantation Drive", date: "Aug 7, 2025", description: "Join us in making the campus greener." },
  { title: "Nature Photography Contest", date: "Sep 12, 2025", description: "Showcase your best moments in nature." },
];

function Header({ current, setCurrent }) {
  return (
    <header className="header">
      <nav>
        {navItems.map(item => (
          <button
            key={item}
            onClick={() => setCurrent(item)}
            className={`nav-button ${current === item ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="hero-container">
      <div className="centered-logo-wrapper">
        <img src={logoImage} alt="Prakriti Club Logo" className="centered-logo" />
      </div>
      <h1 className="hero-title">
        WHAT IS <br /> NATURE?
      </h1>
      <div className="hero-card">
        Nature is the essence of life, encompassing everything from towering mountains to the smallest dewdrops.
      </div>
    </div>
  );
}


function About() {
  return (
    <section className="panel">
      <h2>About Us</h2>
      <p>
        Prakriti Club is a student-led initiative promoting green practices, ecological learning, and a deeper appreciation of nature through events and projects.
      </p>
    </section>
  );
}

function Events() {
  return (
    <section className="panel-events">
      <h2>Upcoming Events</h2>
      
      {/* Centered image */}
      <div className="event-image-wrapper">
        <img src={eventImage} alt="Events" className="event-image" />
      </div>

      <ul>
        {sampleEvents.map((event, idx) => (
          <li key={idx} className="event-item">
            <strong>{event.title}</strong> – <em>{event.date}</em>
            <div>{event.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Aims() {
  return (
    <section className="panel">
      <h2 className="aims-title">WHAT OUR CLUB AIMS?</h2>
      <ol className="aims-list">
        <li>
          <strong>Empowering students to adopt a more mindful, balanced and sustainable lifestyle</strong>
        </li>
        <li>
          <strong>
            Promoting environmental awareness and supporting students to develop a deeper connection with nature and a healthier way of living
          </strong>
        </li>
        <li>
          <strong>
            Encouraging students to explore, appreciate and protect the natural world
          </strong>
        </li>
      </ol>
    </section>
  );
}
export default function App() {
  const [currentPanel, setCurrentPanel] = useState('Home');

  let content;
if (currentPanel === 'Home') content = <Home />;
else if (currentPanel === 'Aims') content = <Aims />;
else if (currentPanel === 'About') content = <About />;
else content = <Events />;


  return (
    <div className={currentPanel === 'Home' ? 'container-hero' : 'container'}>
      <Header current={currentPanel} setCurrent={setCurrentPanel} />
      {content}
      <footer className="footer">
        © 2025 Prakriti Club | Designed by Garima
      </footer>
    </div>
  );
}
