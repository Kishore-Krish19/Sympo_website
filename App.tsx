// ../App.tsx
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import WorkshopCategories from "./pages/WorkshopCategories";
import Workshop from "./pages/Workshop";
import WorkshopDescription from "./pages/WorkshopDescription";
import EVRacing from "./pages/EVRacing";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import EventList from "./pages/EventList";
import EventDescription from "./pages/EventDescription";

/* DATA */
import { TECH_EVENTS, NON_TECH_EVENTS } from "./constants";

/* 🔼 Scroll to top on route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* 🔲 Layout wrapper */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <Layout>
        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />

          {/* EVENT LISTS */}
          <Route
            path="/tech-events"
            element={
              <EventList
                title="Technical Events"
                events={TECH_EVENTS}
                type="tech"
              />
            }
          />

          <Route
            path="/non-tech-events"
            element={
              <EventList
                title="Non-Tech Events"
                events={NON_TECH_EVENTS}
                type="non-tech"
              />
            }
          />

          {/* EVENT DESCRIPTION */}
          <Route path="/events/:id" element={<EventDescription />} />

          {/* WORKSHOPS */}
          <Route path="/workshop" element={<WorkshopCategories />} />
          <Route path="/workshop/:id" element={<Workshop />} />
          <Route path="/workshop/:id/description" element={<WorkshopDescription />} />

          {/* OTHER PAGES */}
          {/* <Route path="/shark-tank" element={<SharkTank />} /> */}
          <Route path="/ev-racing" element={<EVRacing />} />
          <Route path="/register/:type" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
