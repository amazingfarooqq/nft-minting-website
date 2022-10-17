import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import AccountPage from './components/AccountPage/AccountPage';
import Affiliate from './components/Affiliate/Affiliate';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/affiliate" element={<Affiliate />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
