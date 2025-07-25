import React, { useState } from 'react';
import logoImage from './logo.png';
const logoUrl = logoImage;



const navItems = ['Home', 'About', 'Events'];

const sampleEvents = [
  { title: "Tree Plantation Drive", date: "Aug 7, 2025", description: "Join us in making the campus greener." },
  { title: "Nature Photography Contest", date: "Sep 12, 2025", description: "Showcase your best moments in nature." },
];

function Header({ current, setCurrent }) {
  return (
    <header style={styles.header}>
      <img src={logoUrl} alt="Prakriti Club Logo" style={styles.logo} />
      <nav>
        {navItems.map(item => (
          <button
            key={item}
            onClick={() => setCurrent(item)}
            style={{
              ...styles.navButton,
              borderBottom: current === item ? '2px solid #459d4c' : 'none'
            }}>
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section style={styles.panel}>
      <h2>Welcome to the Prakriti Club!</h2>
      <p>
        Dedicated to environmental awareness and sustainability. Connect, learn, and make an impact!
      </p>
    </section>
  );
}

function About() {
  return (
    <section style={styles.panel}>
      <h2>About Us</h2>
      <p>
        Prakriti Club is a student-led initiative promoting green practices, ecological learning, and a deeper appreciation of nature through events and projects.
      </p>
    </section>
  );
}

function Events() {
  return (
    <section style={styles.panel}>
      <h2>Upcoming Events</h2>
      <ul>
        {sampleEvents.map((event, idx) => (
          <li key={idx} style={styles.eventItem}>
            <strong>{event.title}</strong> – <em>{event.date}</em>
            <div>{event.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function App() {
  const [currentPanel, setCurrentPanel] = useState('Home');
  
  let content;
  if (currentPanel === 'Home') content = <Home />;
  else if (currentPanel === 'About') content = <About />;
  else content = <Events />;

  return (
    <div style={styles.container}>
      <Header current={currentPanel} setCurrent={setCurrentPanel} />
      {content}
      <footer style={styles.footer}>
        © 2025 Prakriti Club | Designed by Garima
      </footer>
    </div>
  );
}

// Simple CSS-in-JS styling for demonstration
const styles = {
  container: { fontFamily: 'Helvetica, Arial, sans-serif', minHeight: '100vh', background: '#f1faee' },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', background: '#459d4c', color: '#fff' },
  logo: { height: 60 },
  navButton: { 
    background: 'none', color: '#fff', border: 'none', margin: '0 1rem', fontSize: 18, cursor: 'pointer', fontWeight: 'bold'
  },
  panel: { background: '#fff', margin: '2rem auto', padding: '2rem', borderRadius: 8, maxWidth: 680, boxShadow: '0 2px 8px #b7e6c9' },
  eventItem: { margin: '1rem 0' },
  footer: { textAlign: 'center', padding: '1rem', background: '#e5ffe7', color: '#459d4c', marginTop: '2rem', borderTop: '1px solid #d1f7d6' },
};
