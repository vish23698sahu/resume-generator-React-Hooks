import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

const DUMMY_USERS = [
  { id: 'e1', firstName: 'Vishakha', lastName: 'Sahu', email: 'vish@gmail.com', pass: '1234' },
  { id: 'e2', firstName: 'Ankit', lastName: 'Sharma', email: 'ankit@gmail.com', pass: '1234' },
  { id: 'e3', firstName: 'Neha', lastName: 'Sood', email: 'neha@gmail.com', pass: '1234' },
  { id: 'e4', firstName: 'Vikas', lastName: 'Nene', email: 'vikas@gmail.com', pass: '1234' }
];

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [usersList, setUsersList] = useState(DUMMY_USERS);
  const [showLoginAfterRegister, setShowLoginAfterRegister] = useState(false);
  const [showHome, setShowHome] = useState(true);

  const onSignUpHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowHome(false);
  };

  const onNewUserSignedUpHandler = (newUser) => {
    setUsersList((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  }

  const onRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(false);
  }

  const onClickIconHome = () => {
    setShowLogin(true);
    setShowHome(false);
    setShowRegister(false);
  }

  const onClickOfHome = () => {
    setShowHome(true);
    setShowLogin(false);
    setShowRegister(false);
  }

  return (
    <div className="App">
      <Navbar toGoHome={onClickOfHome} onClickIcon={onClickIconHome} />
      {showHome && <Home />}
      <header className="App-header">
        {showLogin && <Login onSignUp={onSignUpHandler} userList={usersList} />}
        {showRegister && <Register onSignUp={onNewUserSignedUpHandler} onButtonClick={onRegisterClick} />}
      </header>
    </div>
  );
}

export default App;
