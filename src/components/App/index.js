// == Import

import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
import PromoterDetail from 'src/components/PromoterDetail';

import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM loaded');
    dispatch({
      type: 'API_USERS',
    });
  });

  return (
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
        <Route exact path="/organisateurs/:id">
          <Header />
          <PromoterDetail />
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
};

// == Export
export default App;
