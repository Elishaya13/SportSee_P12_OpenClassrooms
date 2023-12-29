import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import previeuwImg from '../assets/images/preview.svg';

const Home = () => {
  const [isUseAPI, setIsUseAPI] = useState<boolean>(
    localStorage.getItem('useApi') === 'true'
  );

  const toggleAPIUsage = () => {
    setIsUseAPI((prevState: boolean) => {
      const newState = !prevState;
      localStorage.setItem('useApi', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div id="home_wrapper">
      <div id="home_content">
        <div className="home_content_header">
          <p style={{ fontWeight: 'bold' }}>
            Bienvenue, cette page existe pour les besoins de la démonstration du
            projet
          </p>{' '}
          <img className="home_icon" src={previeuwImg} alt="previeuw"></img>
          <p style={{ fontStyle: 'italic', color: 'blue' }}>
            Plus tard il pourrait s'y trouver une page de connexion ...
          </p>{' '}
        </div>
        <div className="home_content_select">
          <p>Veuillez séléctionner la source des data</p>
          <button onClick={toggleAPIUsage}>Changer la source</button>
          {isUseAPI ? (
            <p className="data_select_info_text">
              Données actuellement récupérées de l&apos;api
            </p>
          ) : (
            <p className="data_select_info_text">Données depuis le mock</p>
          )}
          <nav>
            <ul className="user_select">
              <li>
                <Link to={`dashboard/12`}>Utilisateur 1</Link>
              </li>
              {isUseAPI && (
                <li>
                  <Link to={`dashboard/18`}>Utilisateur 2</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;