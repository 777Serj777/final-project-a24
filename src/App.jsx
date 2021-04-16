import Home from './pages/main/Main';
import Auth from './pages/auth/Auth';
import { useSelector } from 'react-redux';
import Loader from './components/loader/loader';




function App() {

  const isAuth = useSelector(store => store.currentUser.isAuth);
  const isLoader = useSelector(store => store.currentUser.isLoader);


  if(isLoader) return <Loader></Loader>

  return (
    
      <div className="App">

        {(isAuth)?  <Home/> : <Auth /> }
      

      </div>

  );
}

export default App;
