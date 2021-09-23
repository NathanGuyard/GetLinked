/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import './styles.scss';

import { Carousel } from 'react-carousel-minimal';

<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ArtisteDetailComp/index.js
import banner from './images/banner.jpg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
=======
import banner from './images/banner.jpg';
import guillaume from './images/guillaume.jpg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
// import pin from './images/pin2.png';
>>>>>>> 259ac832a96def3ab6f06bda6851530443dd8bb0
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fourth from './images/fourth.jpg';
<<<<<<< HEAD

const ArtisteDetailComp = ({ userDetail }) => {
=======
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ArtisteDetailComp = ({ artisteDetail }) => {
>>>>>>> 259ac832a96def3ab6f06bda6851530443dd8bb0
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
  
<<<<<<< HEAD
  // console.log(userDetail)
=======
  // console.log(artisteDetail)
>>>>>>> 259ac832a96def3ab6f06bda6851530443dd8bb0

  return (
    <div className="detail-container">
      <img src={banner} alt="" className="detail-container__top" />
      <div className="detail-container__main">
<<<<<<< HEAD
        <img src={userDetail.picture} alt="" className="detail-container__main__profile" />
        <h1 className="detail-container__main__title">{userDetail.name}</h1>
=======
        <img src={artisteDetail.picture} alt="" className="detail-container__main__profile" />
        <h1 className="detail-container__main__title">{artisteDetail.name}</h1>
>>>>>>> 259ac832a96def3ab6f06bda6851530443dd8bb0
        <div className="detail-container__main__note">
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoileTwo} alt="" className="detail-container__main__note__stars" />
          <p className="detail-container__main__note__number">12 avis</p>
        </div>
        <div className="detail-container__main__description">
<<<<<<< HEAD
          {userDetail.description}
        </div>
        <ul className="detail-container__main__infos">
          <li className="detail-container__main__infos__element">taille du groupe : {userDetail.nbMembers}</li>
          <li className="detail-container__main__infos__element">Style de musique : rock</li>
          <li className="detail-container__main__infos__element">Localisation : {userDetail.address}</li>
          <li className="detail-container__main__infos__element">Email : {userDetail.email}</li>
=======
          {artisteDetail.description}
        </div>
        <ul className="detail-container__main__infos">
          <li className="detail-container__main__infos__element">taille du groupe : {artisteDetail.nbMembers}</li>
          <li className="detail-container__main__infos__element">Style de musique : rock</li>
          <li className="detail-container__main__infos__element">Localisation : {artisteDetail.address}</li>
          <li className="detail-container__main__infos__element">Email : {artisteDetail.email}</li>
>>>>>>> 259ac832a96def3ab6f06bda6851530443dd8bb0
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
<<<<<<< HEAD
========
import ArtisteDetailComp from 'src/components/ArtisteDetailComp';

import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ArtisteDetail = () => {
  function findArtist(artistes, searchedSlug) {
    const artiste = artistes.find((testedArtist) => {
      return testedArtist.slug.toLowerCase() === searchedSlug.toLowerCase();
    });
    return artiste;
  }
  
  const { slug } = useParams();
  const artiste = useSelector((state) => findArtist(state.users, slug));

  return (
    <ArtisteDetailComp artisteDetail={artiste}/>
>>>>>>>> 259ac832a96def3ab6f06bda6851530443dd8bb0:src/components/ArtisteDetail/index.js
=======
>>>>>>> 259ac832a96def3ab6f06bda6851530443dd8bb0
  );
};

export default ArtisteDetailComp;
