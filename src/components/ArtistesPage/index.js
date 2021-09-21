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
    <form method="get" className="artistes-page__from">
      <h1 className="artistes-page__from__title">Affiner votre recherche</h1>
      <input type="text" name="artistesPageSearch" id="artistesPageSearch" placeholder="Rechercher" className="artistes-page__from__input--search" />
      <div className="artistes-page__from__bottom">
        <select name="artistesPageSelectStyle" id="artistesPageSelectStyle" className="artistes-page__from__input">
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="classique">Classique</option>
          <option value="rap">Rap</option>
        </select>
        <input type="text" name="artistesPageLocation" id="artistesPageLocation" placeholder="Localisation (ville)" className="artistes-page__from__input" />
        <input type="number" name="artistesPageNumber" id="artistesPageNumber" min="1" max="50" range="1" className="artistes-page__from__input" placeholder="Nombre d'artistes" />
      </div>
    </form>
    <div className="artistes-page__list">
      <div className="artistes-page__list__container">
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
      </div>
      <div className="artistes-page__list__nav">
        <a href="#">prev</a>
        <p>1/25</p>
        <a href="#">next</a>
      </div>
    </div>
  </div>
);

// == Export
export default ArtistesPage;
