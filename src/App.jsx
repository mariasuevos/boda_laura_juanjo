import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import LocationDetails from './components/Location-ceremonia';
import Timeline from './components/Timeline';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import EnvelopeOverlay from './components/EnvelopeOverlay';
import RSVPForm from './components/RSVPForm';
import Alojamiento from './components/alojamiento';
import Divider from './components/divider';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* <EnvelopeOverlay /> */}
      <main>
        <Hero />
        <Countdown />
        <Divider />
        <LocationDetails />
        <Divider />
        <Alojamiento />
        <Divider />
        <Timeline />
        <Divider />
        <Gifts />
        <Divider />
        <RSVPForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;

