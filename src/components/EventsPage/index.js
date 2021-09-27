/* eslint-disable no-plusplus */
// == Import

import { useDispatch, useSelector } from 'react-redux';

import LittleCard from 'src/components/LittleCard';

import './styles.scss';

// == Composant
const EventsPage = () => {
  const events = useSelector((state) => state.events);

  const betterRatedEvents = [];
  for (let index = 0; index < 3; index++) {
    betterRatedEvents.push(events[index]);
  }

  function paginator(items, currentPage, perPageItems) {
    const page = currentPage || 1;
    const perPage = perPageItems || 10;
    const offset = (page - 1) * perPage;
    const paginatedItems = items.slice(offset).slice(0, perPageItems);
    const totalPages = Math.ceil(items.length / perPage);
    return {
      page: page,
      perPage: perPage,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (totalPages > page) ? page + 1 : null,
      total: items.length,
      totalPages: totalPages,
      data: paginatedItems,
    };
  }
  const dispatch = useDispatch();
  const eventsPage = useSelector((state) => state.eventsPage);
  const handleNextPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'INCREASE_EVENTS_PAGE_NUMBER',
    });
  };
  const handlePrevPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DECREASE_EVENTS_PAGE_NUMBER',
    });
  };
  const pagination = paginator(events, eventsPage, 6);
  const numberOfPages = pagination.totalPages;
  const eventsToDisplay = pagination.data;

  return (
    <div className="events-page">
      <div className="events-page__best">
        <h1 className="events-page__best__title">événements du moment</h1>
        <div className="events-page__best__container">
          {betterRatedEvents.map((artist) => (
            <LittleCard key={artist.id} {...artist} type="event" />
          ))}
        </div>
      </div>
      <form method="get" className="events-page__from">
        <h1 className="events-page__from__title">Affiner votre recherche</h1>
        <input type="text" name="eventsPageSearch" id="eventsPageSearch" placeholder="Rechercher" className="events-page__from__input--search" />
        <div className="events-page__from__bottom">
          <select name="eventsPageSelectStyle" id="eventsPageSelectStyle" className="events-page__from__input">
            <option value="rock">Rock</option>
            <option value="jazz">Jazz</option>
            <option value="classique">Classique</option>
            <option value="rap">Rap</option>
          </select>
          <input type="text" name="eventsPageLocation" id="eventsPageLocation" placeholder="Localisation (ville)" className="events-page__from__input" />
          <input type="number" name="eventsPageNumber" id="eventsPageNumber" min="1" max="50" range="1" className="events-page__from__input" placeholder="Nombre d'events" />
        </div>
      </form>
      <div className="events-page__list">
        <div className="events-page__list__container">
          {eventsToDisplay.map((artist) => (
            <LittleCard key={artist.id} {...artist} type="event" />
          ))}
        </div>
        <div className="events-page__list__nav">
          {eventsPage > 1 && <a href="#" onClick={handlePrevPage}>prev</a>}
          <p>{eventsPage}/{numberOfPages}</p>
          {numberOfPages > eventsPage && <a href="#" onClick={handleNextPage}>next</a>}
        </div>
      </div>
    </div>
  );
};

// == Export
export default EventsPage;
