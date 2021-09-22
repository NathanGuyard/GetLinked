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

const ArtisteDetail = () => {
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
  return (
    <div className="detail-container">
      <img src={banner} alt="" className="detail-container__top" />
      <div className="detail-container__main">
        <img src={guillaume} alt="" className="detail-container__main__profile" />
        <h1 className="detail-container__main__title">Nom</h1>
        <div className="detail-container__main__note">
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoileTwo} alt="" className="detail-container__main__note__stars" />
          <p className="detail-container__main__note__number">12 avis</p>
        </div>
        <div className="detail-container__main__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam sapiente blanditiis obcaecati cum quam, id incidunt recusandae dolore veritatis laborum nihil voluptate error, veniam reprehenderit autem eveniet sequi, aut maiores quibusdam in? Alias, excepturi accusantium itaque consequatur odit nemo. Quae alias minus reiciendis maiores esse possimus nesciunt quisquam, nemo perferendis magni laboriosam, aliquid voluptatem quo beatae excepturi provident hic ducimus cumque, dignissimos eos ab fuga! Nemo ad eligendi tenetur rerum cum voluptatum facilis, expedita enim dolore. Nulla quod qui soluta libero odit nobis reiciendis. Minima sit perspiciatis ex vitae accusantium nostrum libero laudantium excepturi, quisquam explicabo iure rem odit!
        </div>
        <ul className="detail-container__main__infos">
          <li className="detail-container__main__infos__element">taille du groupe : 5</li>
          <li className="detail-container__main__infos__element">Style de musique : rock</li>
          <li className="detail-container__main__infos__element">Localisation : Bayonne (64)</li>
          <li className="detail-container__main__infos__element">Durée moyenne : 1h20</li>
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

export default ArtisteDetail;
