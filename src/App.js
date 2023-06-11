import Header from './components/Layout/Header';
import ParallexSection from './components/Layout/ParallaxSection';
import Meals from './components/Meals/Meals';

function App() {
  
  return (
   <>
    <Header />
    <div id="wrapper">
      <div className="content">
        <ParallexSection />
        <Meals />
      </div>
    </div>
   </>
  );
}

export default App;
