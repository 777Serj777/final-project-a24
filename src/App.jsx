import Home from './pages/dashboard/Dashboard';
import Auth from './pages/auth/Auth';
import { useSelector } from 'react-redux';



function App() {

  const isAuth = useSelector(store => store.currentUser.isAuth);
 


  return (
    
      <div className="App">
        {(isAuth)?  <Home/> : <Auth /> }  
      </div>

  );
}

export default App;



