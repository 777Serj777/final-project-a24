import Home from './pages/dashboard/Dashboard';
import Auth from './pages/auth/Auth';
import { useSelector } from 'react-redux';
import Loader from './components/loader/loader';





function App() {

  const isAuth = useSelector(store => store.currentUser.isAuth);
  const isLoading = useSelector(store => store.ui.isLoading);

  if(isLoading)  {
    console.log(1);
    return <Loader/>
  }


  return (
    
      <div className="App">

        {(isAuth)?  <Home/> : <Auth /> }
      

      </div>

  );
}

export default App;
