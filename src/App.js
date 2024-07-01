import './App.css';
import Navabar from './components/Navabar/Navabar';
import Sidemenu from './components/Sidemenu/Sidemenu';
import Docliste from './components/Docliste/Docliste';
import Linkliste from './components/Linkliste/Linkliste';
import Mockdata from './components/Mockdata/Mockdata';
import Vsekme from './components/Vsekme/Vsekme';

function App() {
  return (
    <div className="App">

      <Navabar />

      <Sidemenu />

      <Mockdata />
      
      <Docliste />

      <Vsekme />

      <Linkliste />

    </div>
  );
}

export default App;
