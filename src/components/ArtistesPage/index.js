// == Import

import LittleCard from 'src/components/LittleCard';

import './styles.scss';

// == Composant
const ArtistesPage = () => (
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
);

// == Export
export default ArtistesPage;
