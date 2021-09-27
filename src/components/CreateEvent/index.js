import './styles.scss';

const CreateEvent = () => (
  <div className="eventCreation">
    <h1 className="eventCreation__title">Créer un événement :</h1>
    <form action="POST" className="eventCreation__form">
      <div className="eventCreation__form__element">
        <label htmlFor="name">Nom de l'événement :</label>
        <input type="text" name="name" id="name" className="eventCreation__form__element__input" />
      </div>
      <div className="eventCreation__form__element">
        <label htmlFor="email">Email :</label>
        <input type="text" name="email" id="email" className="eventCreation__form__element__input" />
      </div>
      <div className="eventCreation__form__element">
        <label htmlFor="description">Description :</label>
        <textarea name="description" id="description" cols="30" rows="10" className="eventCreation__form__element__description eventCreation__form__element__input" />
      </div>      
      <div className="eventCreation__form__element">
        <label htmlFor="date">Date :</label>
        <input type="date" name="date" id="date" className="eventCreation__form__element__input" />
      </div>
      <div className="eventCreation__form__element">
        <label htmlFor="address">Ville :</label>
        <input type="text" name="address" id="address" className="eventCreation__form__element__input" />
      </div>
      <div className="eventCreation__form__element">
        <label htmlFor="price">Rémunération (si rémunération) :</label>
        <input type="text" name="price" id="price" className="eventCreation__form__element__input" />
      </div>
      <div className="eventCreation__form__element">
        <label htmlFor="duration">Durée :</label>
        <input type="text" name="duration" id="duration" className="eventCreation__form__element__input" />
      </div>
      <div className="eventCreation__form__element">
        <label htmlFor="picture">Photo de l'événement / lieu :</label>
        <input type="file" name="picture" id="picture" className="eventCreation__form__element__input eventCreation__form__element__input--picture" />
      </div>
      <button type="submit" className="eventCreation__form__submit">Créer un événement</button>
    </form>
  </div>
);

export default CreateEvent;
