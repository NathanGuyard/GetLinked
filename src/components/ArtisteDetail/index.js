/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import './styles.scss';

import { Carousel } from 'react-carousel-minimal';

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
  );
};

export default ArtisteDetail;
