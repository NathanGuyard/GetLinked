// == Import

import Cards from 'src/components/Cards';
import { useSelector } from 'react-redux';

import './styles.scss';

// == Composant
const HomepageArtists = () => (
  <div className="upcomming-events">
    <h1 className="upcomming-events__title">artists du moment</h1>
    <div className="upcomming-events__content">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  </div>
);

// == Export
export default HomepageArtists;
