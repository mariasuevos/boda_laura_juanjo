import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import LocationDetails from './components/LocationDetails';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import EnvelopeOverlay from './components/EnvelopeOverlay';
import RSVPForm from './components/RSVPForm';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <EnvelopeOverlay />
      <main>
        <Hero />
        <Countdown />
        <LocationDetails />
        <Timeline />
        <RSVPForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;

