// == Import

import { Switch, Route } from 'react-router-dom';
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

import UserDetail from 'src/components/UserDetail';

import Loading from 'src/components/Loading';

import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_ARTISTS',
    });
  }, []);

  const loading = useSelector((state) => state.loading);  
  if(loading) {
    return <Loading />;
  }


  // code en dessous :
  // const menuOpened = useSelector((state) => state.menuOpened);

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
        </Route>
        <Route exact path="/nouveau-compte">
          <Header />
          <Register />
        </Route>
        <Route exact path="/modifier-le-compte">
          <Header />
          <EditProfile />
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
