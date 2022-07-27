import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <Landing />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
