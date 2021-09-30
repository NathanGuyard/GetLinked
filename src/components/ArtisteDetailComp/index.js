/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import './styles.scss';

import { Carousel } from 'react-carousel-minimal';
import emailjs from 'emailjs-com';

import banner from './images/banner.jpg';
import banner4 from './images/banner4.jpeg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
import guillaume from './images/guillaume.jpg';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fourth from './images/fourth.jpg';

const ArtisteDetailComp = ({ userDetail }) => {
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

  console.log(userDetail);

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };

  const sendEmail = (event) => {
    event.preventDefault();

    console.log(event.target);

    // const objtest = {
    //   name: 'nom',
    //   user_email: 'email@utilisateur.fr',
    //   message: 'message',
    //   email_to_contact: 'email@contacter.fr',
    // };

    emailjs.sendForm('service_6kkxt0a', 'template_t5j8cbo', event.target, 'user_b9zjRs2ebKBBWwU22hWMN')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="detail-container">
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
          {/* <label htmlFor="name">Nom :</label> */}
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

export default ArtisteDetailComp;
