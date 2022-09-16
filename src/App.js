import './App.css';
import './styles/home.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ExpiriencePage } from './pages/ExpiriencePage';

function App() {
  return (

    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/expiriences' element={<ExpiriencePage />}></Route>
    </Routes>
        
  );
}

export default App;
