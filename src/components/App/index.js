// == Import

import Header from 'src/components/Header';
import CarouselComponent from 'src/components/CarouselComponent';
import HomepageEvents from 'src/components/HomepageEvents';
import HomepageArtists from 'src/components/HomepageArtists';
import Footer from 'src/components/Footer';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    {/* ----------- Header -------------- */}
    <Header />
    <CarouselComponent />
    <HomepageEvents />
    <HomepageArtists />
    <Footer />
  </div>
);

// == Export
export default App;
