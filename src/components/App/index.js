// == Import

import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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
import Profile from 'src/components/Profile';
import Register from 'src/components/Register';
import EditProfile from 'src/components/EditProfile';
import Faq from 'src/components/Faq';

import UserDetail from 'src/components/UserDetail';
import EventDetail from 'src/components/EventDetail';

import Loading from 'src/components/Loading';

import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_ARTISTS',
    });
    dispatch({
      type: 'FETCH_EVENTS',
    });
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch({
      type: 'CLOSE_MENU',
    });
  }, [pathname]);

  const loading = useSelector((state) => state.loading);

  if (loading) {
    return <Loading />;
  }

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
        <Route exact path="/artistes/:slug">
          <Header />
          <UserDetail />
          <Footer />
        </Route>
        <Route exact path="/evenements">
          <Header />
          <EventsPage />
          <Footer />
        </Route>
        <Route exact path="/events/:slug">
          <Header />
          <EventDetail />
          <Footer />
        </Route>
        <Route exact path="/organisateurs">
          <Header />
          <PromotersPage />
          <Footer />
        </Route>
        <Route exact path="/organisateurs/:slug">
          <Header />
          <UserDetail />
          <Footer />
        </Route>
        <Route exact path="/connexion">
          <Header />
          <LoginForm />
        </Route>
        <Route exact path="/profil">
          <Header />
          <Profile />
          <Footer />
        </Route>
        <Route exact path="/nouveau-compte">
          <Header />
          <Register />
          <Footer />
        </Route>
        <Route exact path="/modifier-le-compte">
          <Header />
          <EditProfile />
        </Route>
        <Route exact path="/faq">
          <Header />
          <Faq />
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
