import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import RSVPForm from './components/RSVPForm';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <Hero />
      <Countdown />
      <Timeline />
      <RSVPForm />

      <footer className="py-8 text-center text-stone-500 text-sm">
        <p>Boda Laura & Juanjo — 2026</p>
      </footer>
    </div>
  );
}

export default App;
