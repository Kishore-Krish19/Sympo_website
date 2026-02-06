// ../App.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Workshop from './pages/Workshop';
import EVRacing from './pages/EVRacing';
import Register from './pages/Register';
import Contact from './pages/Contact';
import EventList from './pages/EventList';
import { TECH_EVENTS, NON_TECH_EVENTS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tech-events" element={<EventList title="Technical Events" events={TECH_EVENTS} type="tech" />} />
          <Route path="/non-tech-events" element={<EventList title="Non-Tech Events" events={NON_TECH_EVENTS} type="non-tech" />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/ev-racing" element={<EVRacing />} />
          <Route path="/register/:type" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
