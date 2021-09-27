/* eslint-disable jsx-a11y/label-has-associated-control */
import './styles.scss';

const EditProfile = () => (
  <div className="register">
    <h1 className="register__title">Modifier le compte :</h1>
    <form method="POST" action="" className="register__form">
      <div className="register__form__element">
        <label htmlFor="type">Vous êtes :</label>
        <select name="type" id="type" className="register__form__element__input">
          <option value="artiste">Artiste</option>
          <option value="organisateur">Organisateur</option>
        </select>
      </div>
      <div className="register__form__element">
        <label htmlFor="name">Nom du groupe / organisateur :</label>
        <input type="text" name="name" id="name" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="firstname">Prenom :</label>
        <input type="text" name="firstname" id="firstname" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="lastname">Nom :</label>
        <input type="text" name="lastname" id="lastname" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="email">Email :</label>
        <input type="text" name="email" id="email" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" name="password" id="password" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="description">Description :</label>
        <textarea name="description" id="description" cols="30" rows="10" className="register__form__element__description register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="nb_members">Nombre de personne dans le groupe :</label>
        <input type="number" name="nb_members" id="nb_members" min="0" max="50" range="1" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="address">Ville :</label>
        <input type="text" name="address" id="address" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="website">Site :</label>
        <input type="text" name="website" id="website" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="facebook">Facebook :</label>
        <input type="text" name="facebook" id="facebook" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="instagram">Instagram :</label>
        <input type="text" name="instagram" id="instagram" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="twitter">Twitter :</label>
        <input type="text" name="twitter" id="twitter" className="register__form__element__input" />
      </div>
      <div className="register__form__element">
        <label htmlFor="picture">Photo de profil :</label>
        <input type="file" name="picture" id="picture" className="register__form__element__input register__form__element__input--picture" />
      </div>
      <button type="submit" className="register__form__submit">Modifier le compte</button>
    </form>
  </div>
);

export default EditProfile;
