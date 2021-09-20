// == Import

import Cards from 'src/components/Cards';

import './styles.scss';

// == Composant
const HomepageEvents = () => (
  <div className="upcomming-events">
    <h1 className="upcomming-events__title">événements à venir</h1>
    <div className="upcomming-events__content">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  </div>
);

// == Export
export default HomepageEvents;
