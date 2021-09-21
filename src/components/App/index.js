// == Import

import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import CarouselComponent from 'src/components/CarouselComponent';
import HomepageEvents from 'src/components/HomepageEvents';
import HomepageArtists from 'src/components/HomepageArtists';
import Footer from 'src/components/Footer';

import Card from 'src/components/Cards';
import LittleCard from 'src/components/LittleCard';

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
        <div className="artistes-page">
          <div className="artistes-page__best">
            <h1 className="artistes-page__best__title">Les mieux notés</h1>
            <div className="artistes-page__best__container">
              <LittleCard />
              <LittleCard />
              <LittleCard />
            </div>
          </div>
        </div>
      </Route>
      <Route exact path="/connexion">
        <Header />
        Page connexion
      </Route>
      <Route>
        Erreur 404
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
