import {Redirect, Route} from 'react-router-dom';
import Home from './components/home/Home';
import WrappForForm from './components/wrappForForm/WrappForForm';
import {publicRouter} from './router/routers'

function App() {
  const isAuth = false;
  return (
   
      <div className="App">
     
        {(isAuth)? <Home/> : 
        <WrappForForm>
            {publicRouter.map(router =>  
              <Route path = {router.path} component = {router.component}/>
            )}
            <Redirect to = '/login'/>
        </WrappForForm>}

      </div>

  );
}

export default App;
