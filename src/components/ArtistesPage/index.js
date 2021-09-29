/* eslint-disable no-plusplus */
// == Import
import { useDispatch, useSelector } from 'react-redux';

import LittleCard from 'src/components/LittleCard';

import './styles.scss';

// == Composant
const ArtistesPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const artists = [];
  users.forEach((user) => {
    if (user.type === 'artiste') {
      artists.push(user);
    }
  });
  const betterRatedArtists = [];
  for (let index = 0; index < 3; index++) {
    betterRatedArtists.push(artists[index]);
  }

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_FILTER',
      value: value,
      key: key,
    });
  };
  const handleSearchBar = (evt) => {
    changeField(evt.target.value.toLowerCase(), 'search');
  };
  const searchBarValue = useSelector((state) => state.artistesPageFilters.search);
  const newValue = [];
  artists.forEach((user) => {
    if (user.name.toLowerCase().includes(searchBarValue)) {
      newValue.push(user);
    }
  });

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
  const artistPage = useSelector((state) => state.artistPage);
  const handleNextPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'INCREASE_ARTIST_PAGE_NUMBER',
    });
  };
  const handlePrevPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DECREASE_ARTIST_PAGE_NUMBER',
    });
  };
  const pagination = paginator(newValue, artistPage, 6);
  const numberOfPages = pagination.totalPages;
  const artistsToDisplay = pagination.data;

  return (
    <div className="artistes-page">
      <div className="artistes-page__best">
        <h1 className="artistes-page__best__title">Les mieux notés</h1>
        <div className="artistes-page__best__container">
          {betterRatedArtists.map((artist) => (
            <LittleCard key={artist.id} {...artist} />
          ))}
        </div>
      </div>
      <form method="get" className="artistes-page__from">
        <h1 className="artistes-page__from__title">Affiner votre recherche</h1>
        <input type="text" name="artistesPageSearch" id="artistesPageSearch" placeholder="Rechercher" className="artistes-page__from__input--search" onChange={handleSearchBar} />
        <div className="artistes-page__from__bottom">
          <select name="artistesPageSelectStyle" id="artistesPageSelectStyle" className="artistes-page__from__input">
            <option value="rock">Rock</option>
            <option value="jazz">Jazz</option>
            <option value="classique">Classique</option>
            <option value="rap">Rap</option>
          </select>
          <input type="text" name="artistesPageLocation" id="artistesPageLocation" placeholder="Localisation (ville)" className="artistes-page__from__input" />
          <input type="number" name="artistesPageNumber" id="artistesPageNumber" min="1" max="50" range="1" className="artistes-page__from__input" placeholder="Nombre d'artistes" />
        </div>
      </form>
      <div className="artistes-page__list">
        <div className="artistes-page__list__container">
          {artistsToDisplay.map((artist) => (
            <LittleCard key={artist.id} {...artist} />
          ))}
        </div>
        <div className="artistes-page__list__nav">
          {artistPage > 1 && <a href="#" onClick={handlePrevPage}>prev</a>}
          <p>{artistPage}/{numberOfPages}</p>
          {numberOfPages > artistPage && <a href="#" onClick={handleNextPage}>next</a>}
        </div>
      </div>
    </div>
  );
};

// == Export
export default ArtistesPage;
