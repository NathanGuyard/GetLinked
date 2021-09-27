/* eslint-disable no-plusplus */
// == Import

import LittleCard from 'src/components/LittleCard';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';

// == Composant
const PromotersPage = () => {
  const users = useSelector((state) => state.users);
  const promoters = [];
  users.forEach((user) => {
    if (user.type === 'organisateur') {
      promoters.push(user);
    }
  });

  const betterRatedPromoter = [];
  for (let index = 0; index < 3; index++) {
    betterRatedPromoter.push(promoters[index]);
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
  const promotersPage = useSelector((state) => state.promotersPage);
  const handleNextPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'INCREASE_PROMOTERS_PAGE_NUMBER',
    });
  };
  const handlePrevPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DECREASE_PROMOTERS_PAGE_NUMBER',
    });
  };
  const pagination = paginator(promoters, promotersPage, 6);
  const numberOfPages = pagination.totalPages;
  const promotersToDisplay = pagination.data;

  return (
    <div className="promoters-page">
      <div className="promoters-page__best">
        <h1 className="promoters-page__best__title">Les mieux notés</h1>
        <div className="promoters-page__best__container">
          {betterRatedPromoter.map((promoter) => (
            <LittleCard key={promoter.id} {...promoter} />
          ))}
        </div>
      </div>
      <form method="get" className="promoters-page__from">
        <h1 className="promoters-page__from__title">Affiner votre recherche</h1>
        <input type="text" name="promotersPageSearch" id="promotersPageSearch" placeholder="Rechercher" className="promoters-page__from__input--search" />
        <div className="promoters-page__from__bottom">
          <select name="promotersPageSelectStyle" id="promotersPageSelectStyle" className="promoters-page__from__input">
            <option value="rock">Rock</option>
            <option value="jazz">Jazz</option>
            <option value="classique">Classique</option>
            <option value="rap">Rap</option>
          </select>
          <input type="text" name="promotersPageLocation" id="promotersPageLocation" placeholder="Localisation (ville)" className="promoters-page__from__input" />
          <input type="number" name="promotersPageNumber" id="promotersPageNumber" min="1" max="50" range="1" className="promoters-page__from__input" placeholder="Nombre d'promoters" />
        </div>
      </form>
      <div className="promoters-page__list">
        <div className="promoters-page__list__container">
          {promotersToDisplay.map((promoter) => (
            <LittleCard key={promoter.id} {...promoter} />
          ))}
        </div>
        <div className="promoters-page__list__nav">
          {promotersPage > 1 && <a href="#" onClick={handlePrevPage}>prev</a>}
          <p>{promotersPage}/{numberOfPages}</p>
          {numberOfPages > promotersPage && <a href="#" onClick={handleNextPage}>next</a>}
        </div>
      </div>
    </div>
  );
};

// == Export
export default PromotersPage;
