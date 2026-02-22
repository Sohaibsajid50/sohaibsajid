import './index.css';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Essays } from './components/Essays';
import { Sidequests } from './components/Sidequests';
import { Now } from './components/Now';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-white text-black">
      <Navigation />
      <Home />
      <Projects />
      <Essays />
      <Sidequests />
      <Now />
      <Footer />
    </div>
  );
}

export default App;
