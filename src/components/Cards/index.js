// == Import
import banner from './images/banner.jpg';
import guillaume from './images/guillaume.jpg';
import etoile from './images/etoile1.png';
import etoileTwo from './images/etoile2.png';
import pin from './images/pin.png';

import './styles.scss';

// == Composant
const Cards = () => (
  <div className="card">
    <img src={banner} alt="" className="card__banner" />
    <div className="card__main">
      <img src={guillaume} alt="" className="card__main__profile" />
      <h1 className="card__main__title">Titre</h1>
      <div className="card__main__note">
        <img src={etoile} alt="" className="card__main__note__stars" />
        <img src={etoile} alt="" className="card__main__note__stars" />
        <img src={etoile} alt="" className="card__main__note__stars" />
        <img src={etoile} alt="" className="card__main__note__stars" />
        <img src={etoileTwo} alt="" className="card__main__note__stars" />
      </div>
      <p className="card__main__number">12 avis</p>
      <div className="card__main__location">
        <img src={pin} alt="" className="card__main__location__pin" />
        Bayonne - 64
      </div>
      <div className="card__main__description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Harum, doloremque natus blanditiis in tempora libero consectetur
          nostrum quisquam omnis reprehenderit!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Harum, doloremque natus blanditiis in tempora libero consectetur
          nostrum quisquam omnis reprehenderit!
        </p>
      </div>
      <a href="#" className="card__main__more">Voir plus</a>
    </div>
  </div>
);

// == Export
export default Cards;
