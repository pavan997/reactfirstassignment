import './App.css';
import Joinus from './components/Joinus'
import Settings from './components/Settings'
import Login from './components/Login'
import Contactus from './components/Contactus';
import Search from './components/Search';
import Help from './components/Help';
import Home from './components/Home';
import Download from './components/Download';

function App() {
  return (
    <div className="App Gridcontainer">
      <Joinus />
      <Settings />
      <Login />
      <Contactus />
      <Search />
      <Help />
      <Home />
      <Download />
    </div>
  );
}

export default App;
