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
import ErrorPage from 'src/components/ErrorPage';
import ArtisteDetail from 'src/components/ArtisteDetail';

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
      <Route exact path="/artistes/:id">
        <Header />
        <ArtisteDetail />
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
        <ErrorPage />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
