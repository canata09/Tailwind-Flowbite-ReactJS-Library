import './App.css';
import Navabar from './components/Navabar/Navabar';
import Mockdata from './components/Mockdata/Mockdata';
import Fonts from './components/Fonts/Fonts';

function App() {
  return (
    <div className="App">

      <Navabar />
      <div class="grid grid-cols-layout">
        <div>Item 1</div>
        <div>Item 1</div>
      </div>
      <div className="container">
        <p className="font-poppins">İçerik 1</p>
      </div>
      <Mockdata />

    </div>
  );
}

export default App;
