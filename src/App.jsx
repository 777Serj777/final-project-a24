import Authorization from './components/authorization/Authorization';
// import Button from './components/button/Button';
// import Input from './components/input/Input';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const isAuth = false;
  return (
   
      <div className="App">
        {(isAuth)? '' : <Authorization/>}
      </div>

  );
}

export default App;
