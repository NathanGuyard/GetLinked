/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import './styles.scss';

import { Carousel } from 'react-carousel-minimal';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';

import banner4 from './images/banner4.jpeg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fourth from './images/fourth.jpg';

// Here we have the details of an artist page
// userDetail is a prop that we send from the API to retrieve the data for display on the page dynamically

const ArtisteDetailComp = ({ userDetail }) => {
  const dispatch = useDispatch();
  const successPopup = useSelector((state) => state.successPopup);
  const errorPopup = useSelector((state) => state.errorPopup);

  const data = [
    {
      image: first,
    },
    {
      image: second,
    },
    {
      image: third,
    },
    {
      image: fourth,
    },
  ];

  // console.log(userDetail);

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };

  // Use of an extension named: emailjs-com, to be able to send email directly to the site

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_6kkxt0a', 'template_t5j8cbo', event.target, 'user_b9zjRs2ebKBBWwU22hWMN')
      .then(() => {
        dispatch({
          type: 'TOGGLE_SUCCESS_POPUP',
        });
      })
      .catch(() => {
        dispatch({
          type: 'TOGGLE_ERROR_POPUP',
        });
      });
  };

  const handleCloseSuccessPopup = () => {
    dispatch({
      type: 'TOGGLE_SUCCESS_POPUP',
    });
  };

  const handleCloseErrorPopup = () => {
    dispatch({
      type: 'TOGGLE_ERROR_POPUP',
    });
  };

  console.log(userDetail);

  // The HTML code with dynamic props for each detail page of an artist

  return (
    <div className="detail-container">
      {successPopup && (
        <div className="detail-container__popup">
          <h1 className="detail-container__popup__title">Message envoyé avec succès !</h1>
          <button type="button" className="detail-container__popup__button" onClick={handleCloseSuccessPopup}>Fermer</button>
        </div>
      )}
      {errorPopup && (
        <div className="detail-container__popup__error">
          <h1 className="detail-container__popup__error__title">Erreur, message non envoyé</h1>
          <button type="button" className="detail-container__popup__error__button" onClick={handleCloseErrorPopup}>Fermer</button>
        </div>
      )}
      <img src={banner4} alt="" className="detail-container__top" />
      <div className="detail-container__main">
        <img src={userDetail.picture} alt="" className="detail-container__main__profile" />
        <h1 className="detail-container__main__title">{userDetail.name}</h1>
        <div className="detail-container__main__note">
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoileTwo} alt="" className="detail-container__main__note__stars" />
          <p className="detail-container__main__note__number">12 avis</p>
        </div>
        <div className="detail-container__main__description">
          {userDetail.description}
        </div>
        <ul className="detail-container__main__infos">
          <li className="detail-container__main__infos__element">taille du groupe : {userDetail.nbMembers}</li>
          <li className="detail-container__main__infos__element">Style de musique : rock</li>
          <li className="detail-container__main__infos__element">Localisation : {userDetail.address}</li>
          <li className="detail-container__main__infos__element">Email : {userDetail.email}</li>
        </ul>
        <form className="detail-container__main__form" onSubmit={sendEmail}>
          <input type="hidden" name="name" value={userDetail.email} />
          <div className="detail-container__main__form__container">
            <div className="detail-container__main__form__container__name">
              <label htmlFor="email">Email :</label>
              <input type="email" name="user_email" />
            </div>
            <div className="detail-container__main__form__container__name">
              <label htmlFor="message">Message :</label>
              <textarea name="message" rows="4" />
            </div>
          </div>
          <input type="submit" value="Contacter" className="detail-container__main__form__button" />
        </form>
        <div className="detail-container__main__medias">
          <h1 className="detail-container__main__medias__title">Photos de l'artiste :</h1>
          <Carousel
            data={data}
            time={4000}
            width="560px"
            height="315px"
            captionStyle={captionStyle}
            radius="0"
            z-index="1"
            captionPosition="center"
            automatic
            dots
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: 'center',
              // maxWidth: '850px',
              // maxHeight: '500px',
              // margin: '0 auto',
              // padding: '0 0rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>
      </div>
    </div>
  );
};

ArtisteDetailComp.propTypes = {
  userDetail: PropTypes.object.isRequired,
};

export default ArtisteDetailComp;
