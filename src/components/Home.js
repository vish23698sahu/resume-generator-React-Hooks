import { Fragment, useState } from "react";
import Navbar from './Navbar';
import Jumbotron from "./Jumbotron";
import Login from "./Login";
import Register from "./Register";
import FooterComp from './FooterComp';
import ResumeImages from "./ResumeImages";
import AboutUs from "./AboutUs";

import './Home.css';

const DUMMY_USERS = [
    { id: 'e1', firstName: 'Vishakha', lastName: 'Sahu', email: 'vish@gmail.com', pass: '1234' },
    { id: 'e2', firstName: 'Ankit', lastName: 'Sharma', email: 'ankit@gmail.com', pass: '1234' },
    { id: 'e3', firstName: 'Neha', lastName: 'Sood', email: 'neha@gmail.com', pass: '1234' },
    { id: 'e4', firstName: 'Vikas', lastName: 'Nene', email: 'vikas@gmail.com', pass: '1234' }
];

const Home = props => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [usersList, setUsersList] = useState(DUMMY_USERS);
    const [showHome, setShowHome] = useState(true);
    const [showAboutUs, setShowAboutUs] = useState(false);

    const onSignUpHandler = () => {
        setShowHome(false);
        setShowLogin(false);
        setShowRegister(true);
        setShowAboutUs(false);
    };

    const onNewUserSignedUpHandler = (newUser) => {
        setUsersList((prevUsers) => {
            return [newUser, ...prevUsers];
        });
        setShowLogin(true);
        setShowRegister(false);
        setShowAboutUs(false);
    }

    const onClickIconHome = () => {
        setShowHome(false);
        setShowLogin(true);
        setShowRegister(false);
        setShowAboutUs(false);
    }

    const onClickOfHome = () => {
        setShowHome(true);
        setShowLogin(false);
        setShowRegister(false);
        setShowAboutUs(false);
    }

    const onClickShowFooter = () => {
        setShowAboutUs(true);
        setShowHome(false);
        setShowRegister(false);
        setShowLogin(false);
    }

    return (
        <Fragment>
            <Navbar toGoHome={onClickOfHome} onClickIcon={onClickIconHome} />

            {showAboutUs && <AboutUs />}
            {showHome && <div>
                <Jumbotron />
                <ResumeImages />
            </div>}
            <div className="App-header">
                {showLogin && <Login onSignUp={onSignUpHandler} userList={usersList} showHomePage={onClickOfHome} />}
                {showRegister && <Register onSignUp={onNewUserSignedUpHandler} />}
            </div>

            <footer>
                <FooterComp onClickResumeJob={onClickOfHome} onFooterClicks={onClickShowFooter} />
            </footer>
        </Fragment >
    );
};

export default Home;