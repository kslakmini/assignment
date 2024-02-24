import NavBar from './components/NavigationBar/navBar';
import Slider from './components/NavigationBar/slider';
import Destinations from './components/Destinations/destinations';
import SaveDo from './components/SaveDo/saveDo';
import Offers from './components/Offers/offers';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Destinations />
      <SaveDo />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
