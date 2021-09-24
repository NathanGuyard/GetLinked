import { useParams } from 'react-router';
import './styles.scss';
import nathan from './images/nathan.jpg';


const Profile = () => (
  <div className="profil">

    <img src={nathan} alt="" className="profil__img"/>
    
    <p className="profil__info__firstName info">Nom :</p>
    <p className="infos">Nathan</p>

    <p className="profil__info__lastName info">Prénom :</p>
    <p className="infos">Nathan</p>

    <p className="profil__info__nameArtiste info">Nom d'artiste :</p>
    <p className="infos">Simp</p>

    <p className="profil__info__description info">Description : </p>
    <p className="infos"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio laudantium voluptas tenetur cumque ea natus rerum similique illo! Similique sunt dolorum incidunt.</p>

    <p className="profil__info__sizegroup info">Taille du groupe : </p>
    <p className="infos">1</p>

    <p className="profil__info__styleMusique info">Style de musique :</p>
    <p className="infos">Inconnu</p>

    <p className="profil__info__Location info">Localisation :</p>
    <p className="infos">Paris</p>

    <p className="profil__info__email info">Email : UltraSimp@gmail.com</p>
    <p className="infos">UltraSimp@gmail.com</p>

    <button className="profil__modif">Modifier le profil</button>

  </div>
);


export default Profile;
