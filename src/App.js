import './App.css';
import Main from './components/main';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="">
      <Main />
    </div>
    </BrowserRouter>
  );
}

export default App;
