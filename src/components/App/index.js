// == Import

import Header from 'src/components/Header';
import CarouselComponent from 'src/components/CarouselComponent';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    {/* ----------- Header -------------- */}
    <Header />
    <CarouselComponent />
  </div>
);

// == Export
export default App;
