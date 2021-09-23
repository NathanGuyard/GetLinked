/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import './styles.scss';

import { Carousel } from 'react-carousel-minimal';

import banner from './images/banner.jpg';
import guillaume from './images/guillaume.jpg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
// import pin from './images/pin2.png';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fourth from './images/fourth.jpg';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ArtisteDetailComp = ({ artisteDetail }) => {
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

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  
  // console.log(artisteDetail)

  return (
    <div className="detail-container">
      <img src={banner} alt="" className="detail-container__top" />
      <div className="detail-container__main">
        <img src={artisteDetail.picture} alt="" className="detail-container__main__profile" />
        <h1 className="detail-container__main__title">{artisteDetail.name}</h1>
        <div className="detail-container__main__note">
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoileTwo} alt="" className="detail-container__main__note__stars" />
          <p className="detail-container__main__note__number">12 avis</p>
        </div>
        <div className="detail-container__main__description">
          {artisteDetail.description}
        </div>
        <ul className="detail-container__main__infos">
          <li className="detail-container__main__infos__element">taille du groupe : {artisteDetail.nbMembers}</li>
          <li className="detail-container__main__infos__element">Style de musique : rock</li>
          <li className="detail-container__main__infos__element">Localisation : {artisteDetail.address}</li>
          <li className="detail-container__main__infos__element">Email : {artisteDetail.email}</li>
        </ul>
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
