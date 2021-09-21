// == Import
import './styles.scss';

// == Composant
const LoginForm = () => (
  <div className="form__container">
    <form action="" method="post" className="form__container__info">

      <label htmlFor="email" className="form__container__info__labelEmail">Email</label>
      <input type="email" name="email" id="email" className="form__container__info__email" />

      <label htmlFor="password" className="form__container__info__labelPassword">Mot de passe</label>
      <input type="password" name="password" id="password"className="form__container__info__password"/>
      <button type="submit" className="form__container__info__login">Connexion</button>
    </form>
  </div>
);

// == Export
export default LoginForm;
