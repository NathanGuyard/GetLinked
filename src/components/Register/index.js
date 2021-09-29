/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

const Register = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.createProfil.type);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_VALUE_NEW_USER',
      value: value,
      key: key,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'NEW_USER',
    });
  };

  const handleTypeChange = (evt) => {
    changeField(evt.target.value, 'type');
  };
  const handleNameChange = (evt) => {
    changeField(evt.target.value, 'name');
    changeField((evt.target.value).replace(/\s+/g, '-').toLowerCase(), 'slug');
  };
  const handleFirstnameChange = (evt) => {
    changeField(evt.target.value, 'firstname');
  };
  const handleLastnameChange = (evt) => {
    changeField(evt.target.value, 'lastname');
  };
  const handleEmailChange = (evt) => {
    changeField(evt.target.value, 'email');
  };
  const handlePasswordChange = (evt) => {
    changeField(evt.target.value, 'password');
  };
  const handleDescriptionChange = (evt) => {
    changeField(evt.target.value, 'description');
  };
  const handleNbmembersChange = (evt) => {
    changeField(evt.target.value, 'nb_members');
  };
  const handleAddressChange = (evt) => {
    changeField(evt.target.value, 'address');
  };
  const handleWebsiteChange = (evt) => {
    changeField(evt.target.value, 'website');
  };
  const handleFacebookChange = (evt) => {
    changeField(evt.target.value, 'facebook');
  };
  const handleTwitterChange = (evt) => {
    changeField(evt.target.value, 'twitter');
  };
  const handleInstagramChange = (evt) => {
    changeField(evt.target.value, 'instagram');
  };
  const handlePictureChange = (evt) => {
    changeField(evt.target.value, 'picture');
  };

  return (
    <div className="register">
      <h1 className="register__title">Créer mon compte :</h1>
      <form action="POST" className="register__form" onSubmit={handleSubmit}>
        <div className="register__form__element">
          <label htmlFor="type">Vous êtes :</label>
          <select name="type" id="type" className="register__form__element__input" onChange={handleTypeChange}>
            <option value="">-- Choisir une option --</option>
            <option value="artiste">Artiste</option>
            <option value="organisateur">Organisateur</option>
          </select>
        </div>
        <div className="register__form__element">
          <label htmlFor="name">Nom du groupe / organisateur :</label>
          <input type="text" name="name" id="name" className="register__form__element__input" onChange={handleNameChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="firstname">Prenom :</label>
          <input type="text" name="firstname" id="firstname" className="register__form__element__input" onChange={handleFirstnameChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="lastname">Nom :</label>
          <input type="text" name="lastname" id="lastname" className="register__form__element__input" onChange={handleLastnameChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="email">Email :</label>
          <input type="text" name="email" id="email" className="register__form__element__input" onChange={handleEmailChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" name="password" id="password" className="register__form__element__input" onChange={handlePasswordChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="description">Description :</label>
          <textarea name="description" id="description" cols="30" rows="10" className="register__form__element__description register__form__element__input" onChange={handleDescriptionChange} />
        </div>
        {userType === 'artiste' && (
          <div className="register__form__element">
            <label htmlFor="nb_members">Nombre de personne dans le groupe :</label>
            <input type="number" name="nb_members" id="nb_members" min="1" max="50" range="1" className="register__form__element__input" onChange={handleNbmembersChange} />
          </div>
        )}

        <div className="register__form__element">
          <label htmlFor="address">Ville :</label>
          <input type="text" name="address" id="address" className="register__form__element__input" onChange={handleAddressChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="website">Site :</label>
          <input type="text" name="website" id="website" className="register__form__element__input" onChange={handleWebsiteChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="facebook">Facebook :</label>
          <input type="text" name="facebook" id="facebook" className="register__form__element__input" onChange={handleFacebookChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="instagram">Instagram :</label>
          <input type="text" name="instagram" id="instagram" className="register__form__element__input" onChange={handleInstagramChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="twitter">Twitter :</label>
          <input type="text" name="twitter" id="twitter" className="register__form__element__input" onChange={handleTwitterChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="picture">Photo de profil :</label>
          <input type="file" name="picture" id="picture" className="register__form__element__input register__form__element__input--picture" onChange={handlePictureChange} />
        </div>
        <button type="submit" className="register__form__submit">Créer mon compte</button>
      </form>
    </div>
  );
};

export default Register;
