/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import './styles.scss';

import EventsDetailComp from 'src/components/EventsDetailComp';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EventDetail = () => {
  function findUser(users, searchedSlug) {
    const user = users.find((testedUser) => {
      return testedUser.slug === searchedSlug;
    });
    return user;
  }

  const { slug } = useParams();
  // const user = useSelector((state) => findUser(state.users, slug));
  // console.log('user :' + user);
  // console.log(slug);
  const event = useSelector((state) => findUser(state.events, slug));
  console.log('event :' + event);

  return (
    <EventsDetailComp userDetail={event} />
  );
};

export default EventDetail;
