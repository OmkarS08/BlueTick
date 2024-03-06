import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WeOffer from './components/WeOffer/WeOffer';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <WeOffer/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
