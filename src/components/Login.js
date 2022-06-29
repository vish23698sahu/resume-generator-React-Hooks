import { Fragment, useState } from "react";
import Home from './Home';
import classes from './Login.module.css';


const Login = props => {
    const [showHomePage, setShowHomePage] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPass, setEnteredPass] = useState('');
    const [credentialsMatched, setCredentialsMatched] = useState(true);

    const onLoginHandler = (event) => {
        event.preventDefault();
        const emailsInDB = props.userList.map(user => user.email);
        const passInDB = props.userList.map(user => user.pass);

        for (const e of emailsInDB) {
            if (e === enteredEmail) {
                console.log('Login successful!');
                setShowHomePage(true);
                return;
            }
        }
        for (const p in passInDB) {
            if (p === enteredPass) {
                console.log('Login successful!');
                setShowHomePage(true);
                return;
            }
        }

        //if credentials are not valid
        setCredentialsMatched(false);
    }

    const onEmailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const onPassChangeHandler = (event) => {
        setEnteredPass(event.target.value);
    }

    return (
        <Fragment>
            {!showHomePage &&
                <form className={classes.loginBody}>
                    <p>Let's Log you in </p>
                    {!credentialsMatched && <h6 className={classes.colorRedText} >Please enter Valid email and password combination</h6>}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon2">email</span>
                        <input className={credentialsMatched ? '' : `${classes.colorRed} ${'form-control'}`} type="text" class="form-control" placeholder="email" onChange={onEmailChangeHandler} aria-label="email" aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">password</span>
                        <input className={credentialsMatched ? '' : `${classes.colorRed} ${'form-control'}`} type="password" class="form-control" placeholder="password" onChange={onPassChangeHandler} aria-label="password" aria-describedby="basic-addon1" />
                    </div>
                    <button onClick={onLoginHandler} >Login</button>
                    <button onClick={props.onSignUp} >Register</button>
                </form>}
            {showHomePage && <Home userName={enteredEmail} />}
        </Fragment>
    );
};


export default Login;