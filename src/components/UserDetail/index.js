/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import './styles.scss';

import { Carousel } from 'react-carousel-minimal';
import banner from './images/banner.jpg';
import guillaume from './images/guillaume.jpg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fourth from './images/fourth.jpg';

import ArtisteDetailComp from 'src/components/ArtisteDetailComp';
import PromoterDetailComp from 'src/components/PromoterDetailComp';

import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const UserDetail = () => {

  function findUser(users, searchedSlug) {
    const user = users.find((testedUser) => {
      console.log(testedUser)
      return testedUser.slug.toLowerCase() === searchedSlug.toLowerCase();
    });
    return user;
  }
  
  const { slug } = useParams();
  const user = useSelector((state) => findUser(state.users, slug));

  console.log(user.type)

  if (user.type === "artiste") {
    return (
      <ArtisteDetailComp userDetail={user}/>
    );
  }

  return (
    <PromoterDetailComp userDetail={user} />
  )

};

export default UserDetail;
