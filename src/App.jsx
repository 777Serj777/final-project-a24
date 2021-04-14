import {Redirect, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';


function App() {
  const isAuth = false;
  return (
   
      <div className="App">
     
        {(isAuth)?  <Home/> : <Auth /> }
      

      </div>

  );
}

export default App;
