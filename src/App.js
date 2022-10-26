import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import AccountPage from './components/AccountPage/AccountPage';
import { useContextAPI } from './features/contextapi';
import MessageBox from "./components/MessageBox/MessageBox"

function App() {
  const { message, setMessage } = useContextAPI()
  const { user } = useContextAPI()
  return (
    <div className="App">
      {message?.isMessage &&
       <div className="container-fluid" style={{ position: 'fixed', top: '50px', right: '20px', zIndex: '111111', width: "300px" }}>
         <MessageBox message={message} setMessage={setMessage} />
       </div>
      }

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup/>} />
          <Route path="/account" element={!user ? <Navigate to="/" /> : <AccountPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
