import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import AccountPage from './components/AccountPage/AccountPage';
import Affiliate from './components/Affiliate/Affiliate';
import { useContextAPI } from './features/contextapi';
import MessageBox from "./components/MessageBox/MessageBox"

function App() {
  const { message, setMessage } = useContextAPI()
  return (
    <div className="App">
      {message.isMessage &&
        <MessageBox message={message} setMessage={setMessage} />
      }

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
