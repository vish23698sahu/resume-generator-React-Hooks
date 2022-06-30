import { Fragment } from "react";
import './Jumbotron.css';

const Jumbotron = () => {
    return (
        <Fragment>
            <div class="jumbotron">
                <h1 class="display-4 textBold ">Build your Resume Now!</h1>
                <p class="lead colorItBlue">The Goal of your Resume is not getting you a Job, But to screen you through Thousands of Applied Ones.</p>
                <hr class="my-4" />
                <p class="textBig">Here we are to help you get through the very First Job screening</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg btn-transition " href="#" role="button">Pick a Template</a>
                </p>
            </div>
        </Fragment>
    );
};

export default Jumbotron;