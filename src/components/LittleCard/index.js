// == Import
import banner from './images/banner.jpg';
import guillaume from './images/guillaume.jpg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
import pin from './images/pin2.png';

import './styles.scss';

// == Composant
const LittleCard = () => (
  <div className="little-card">
    <img src={banner} alt="" className="little-card__banner" />
    <div className="little-card__main">
      <img src={guillaume} alt="" className="little-card__main__profile" />
      <h1 className="little-card__main__title">Titre</h1>
      <div className="little-card__main__note">
        <img src={etoile} alt="" className="little-card__main__note__stars" />
        <img src={etoile} alt="" className="little-card__main__note__stars" />
        <img src={etoile} alt="" className="little-card__main__note__stars" />
        <img src={etoile} alt="" className="little-card__main__note__stars" />
        <img src={etoileTwo} alt="" className="little-card__main__note__stars" />
      </div>
      <p className="little-card__main__number">12 avis</p>
      <div className="little-card__main__location">
        <img src={pin} alt="" className="little-card__main__location__pin" />
        Bayonne - 64
      </div>
      <a href="#" className="little-card__main__more">Voir plus</a>
    </div>
  </div>
);

// == Export
export default LittleCard;
