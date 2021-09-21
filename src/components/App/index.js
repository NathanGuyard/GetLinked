// == Import

import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import CarouselComponent from 'src/components/CarouselComponent';
import HomepageEvents from 'src/components/HomepageEvents';
import HomepageArtists from 'src/components/HomepageArtists';
import Footer from 'src/components/Footer';
import LoginForm from 'src/components/LoginForm';
import ArtistesPage from 'src/components/ArtistesPage';
import EventsPage from 'src/components/EventsPage';
import PromotersPage from 'src/components/PromotersPage';

import mug from './images/mug.png';
import mug2 from './images/mug2.png';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    {/* ----------- Header -------------- */}
    <Switch>
      <Route exact path="/">
        <Header />
        <CarouselComponent />
        <HomepageEvents />
        <HomepageArtists />
        <Footer />
      </Route>
      <Route exact path="/artistes">
        <Header />
        <ArtistesPage />
        <Footer />
      </Route>
      <Route exact path="/evenements">
        <Header />
        <EventsPage />
        <Footer />
      </Route>
      <Route exact path="/organisateurs">
        <Header />
        <PromotersPage />
        <Footer />
      </Route>
      <Route exact path="/connexion">
        <Header />
        <LoginForm />
      </Route>
      <Route>
        <Header />
        404 mug not found
        <img src={mug} alt="" />
        <img src={mug2} alt="" />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
