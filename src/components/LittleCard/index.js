/* eslint-disable react/require-default-props */
// == Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import banner from './images/banner.jpg';
import guillaume from './images/guillaume.jpg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
import pin from './images/pin2.png';

import './styles.scss';

// == Composant
const LittleCard = ({
  name,
  firstname,
  lastname,
  picture,
  description,
  nb_members,
  address,
  email,
  slug,
  type
}) => (
  <Link to={`${type + "s"}/${slug}`}>
    <div className="little-card">
      <img src={banner} alt="" className="little-card__banner" />
      <div className="little-card__main">
        <img src={picture} alt="" className="little-card__main__profile" />
        <h1 className="little-card__main__title">{name}</h1>
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
          {address}
        </div>
        <div className="little-card__main__more">Voir plus</div>
      </div>
    </div>
  </Link>
);

LittleCard.propTypes = {
  name: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nb_members: PropTypes.number,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// == Export
export default LittleCard;
