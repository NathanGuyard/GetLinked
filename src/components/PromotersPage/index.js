// == Import

import LittleCard from 'src/components/LittleCard';

import './styles.scss';

// == Composant
const PromotersPage = () => (
  <div className="promoters-page">
    <div className="promoters-page__best">
      <h1 className="promoters-page__best__title">Les mieux notés</h1>
      <div className="promoters-page__best__container">
        <LittleCard />
        <LittleCard />
        <LittleCard />
      </div>
    </div>
    <form method="get" className="promoters-page__from">
      <h1 className="promoters-page__from__title">Affiner votre recherche</h1>
      <input type="text" name="promotersPageSearch" id="promotersPageSearch" placeholder="Rechercher" className="promoters-page__from__input--search" />
      <div className="promoters-page__from__bottom">
        <select name="promotersPageSelectStyle" id="promotersPageSelectStyle" className="promoters-page__from__input">
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="classique">Classique</option>
          <option value="rap">Rap</option>
        </select>
        <input type="text" name="promotersPageLocation" id="promotersPageLocation" placeholder="Localisation (ville)" className="promoters-page__from__input" />
        <input type="number" name="promotersPageNumber" id="promotersPageNumber" min="1" max="50" range="1" className="promoters-page__from__input" placeholder="Nombre d'promoters" />
      </div>
    </form>
    <div className="promoters-page__list">
      <div className="promoters-page__list__container">
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
        <LittleCard />
      </div>
      <div className="promoters-page__list__nav">
        <a href="#">prev</a>
        <p>1/25</p>
        <a href="#">next</a>
      </div>
    </div>
  </div>
);

// == Export
export default PromotersPage;
