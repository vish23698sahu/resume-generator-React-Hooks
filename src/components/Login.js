import { Fragment, useState } from "react";
import classes from './Login.module.css';

const Login = props => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPass, setEnteredPass] = useState('');
    const [credentialsMatched, setCredentialsMatched] = useState(true);

    const onLoginHandler = async (event) => {
        event.preventDefault();

        const response = await fetch('https://login-signup-portfolio-default-rtdb.firebaseio.com/Users.json');
        const responseData = await response.json();
        const loadedUsers = [];

        for (const i in responseData) {
            loadedUsers.push({
                id: i,
                name: responseData[i].user.name,
                lastName: responseData[i].user.lastName,
                email: responseData[i].user.email,
                password: responseData[i].user.pass
            });
        }

        for (const em in loadedUsers) {
            if (enteredEmail === loadedUsers[em].email) {
                console.log('email authenticated');
                if (enteredPass === loadedUsers[em].password) {
                    console.log('User Authenticated');
                    props.showHomePage();
                    return;
                }
                else {
                    console.log('Invalid Password!');
                    setCredentialsMatched(false);
                }
            }
            else {
                setCredentialsMatched(false);
            }
        }
    }

    const onEmailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const onPassChangeHandler = (event) => {
        setEnteredPass(event.target.value);
    }

    return (
        <Fragment>
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
            </form>
        </Fragment>
    );
};

export default Login;