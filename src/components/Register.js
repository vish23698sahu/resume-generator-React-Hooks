import { isClickableInput } from "@testing-library/user-event/dist/utils";
import { Fragment, useState } from "react";
import classes from './Register.module.css';


const Register = props => {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPass, setEnteredPass] = useState('');
    const [detailsEmpty, setDetailsEmpty] = useState(false);
    const [nameEmpty, setNameEmpty] = useState(false);
    const [lNameEmpty, setLNameEmpty] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [passEmpty, setPassEmpty] = useState(false);

    const onFNameChangeHandler = (event) => {
        setEnteredFirstName(event.target.value);
        setNameEmpty(false);
    };

    const onLNameChangeHandler = (event) => {
        setEnteredLastName(event.target.value);
        setLNameEmpty(false);
    };

    const onEmailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        setEmailEmpty(false);
    };

    const onPassChangeHandler = (event) => {
        setEnteredPass(event.target.value);
        setPassEmpty(false);
    };

    const onSignUpHandler = () => {
        if (enteredFirstName === '') {
            setNameEmpty(true);
            return;
        }
        if (enteredLastName === '') {
            setLNameEmpty(true);
            return;
        }

        if (enteredEmail === '') {
            setEmailEmpty(true);
            return;
        }

        if (enteredPass === '') {
            setPassEmpty(true);
            return;
        }

        const userDetails = {
            id: 'Math.random(2)',
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            pass: enteredPass
        };
        props.onSignUp(userDetails);
        props.onButtonClick();
    };

    return (
        <Fragment>
            <div className={classes.loginBody} >
                <p>Please enter your details</p>
                {/* {detailsEmpty && <h6 className={classes.colorRedText} >Kindly provide all the details</h6>} */}
                {nameEmpty && <h6 className={classes.colorRedText} >Please enter your name.</h6>}
                {lNameEmpty && <h6 className={classes.colorRedText} >Please enter your Last Name</h6>}
                {emailEmpty && <h6 className={classes.colorRedText} >Please enter your email</h6>}
                {passEmpty && <h6 className={classes.colorRedText} >Please enter your password</h6>}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">First Name</span>
                    <input type="text" className={nameEmpty ? `${classes.colorRed} ${'form-control'}` : 'form-control'} placeholder="First Name" onChange={onFNameChangeHandler} aria-label="First Name" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">Last Name</span>
                    <input type="text" className={lNameEmpty ? `${classes.colorRed} ${'form-control'}` : 'form-control'} placeholder="Last Name" onChange={onLNameChangeHandler} aria-label="Last Name" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">email</span>
                    <input type="text" className={emailEmpty ? `${classes.colorRed} ${'form-control'}` : 'form-control'} placeholder="email" onChange={onEmailChangeHandler} aria-label="email" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">password</span>
                    <input type="password" className={passEmpty ? `${classes.colorRed} ${'form-control'}` : 'form-control'} placeholder="password" onChange={onPassChangeHandler} aria-label="password" aria-describedby="basic-addon1" />
                </div>
                <button onClick={onSignUpHandler} >Sign Up</button>
            </div>
        </Fragment>
    );
};


export default Register;