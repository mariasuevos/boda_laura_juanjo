import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import RSVPForm from './components/RSVPForm';
import EnvelopeOverlay from './components/EnvelopeOverlay';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <EnvelopeOverlay />
      <main>
        <Hero />
        <Countdown />
        <Timeline />
        <RSVPForm />

        <footer className="py-8 text-center text-stone-500 text-sm">
          <p>Boda Laura & Juanjo — 2026</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

