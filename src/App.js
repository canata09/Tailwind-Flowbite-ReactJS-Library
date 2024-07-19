import './App.css';
import Navabar from './components/Navabar/Navabar';
import Mockdata from './components/Mockdata/Mockdata';
import Fonts from './components/Fonts/Fonts';

function App() {
  return (
    <div className="App">

      <Navabar />
      <div className="container">
        <p className="font-poppins">İçerik 1</p>
      </div>
      <Mockdata />

    </div>
  );
}

export default App;
