import { Fragment } from "react";
import classes from './Home.module.css';
import logo1 from '../images/resume-1.jpg';
import logo2 from '../images/resume-2.jpg';
import logo3 from '../images/resume-3.png';
import logo4 from '../images/resume-4.jpg';
import logo5 from '../images/resume-5.jpg';
import logo6 from '../images/resume-6.jpg';
import logo7 from '../images/resume-7.png';
import logo8 from '../images/resume-8.jpg';
import logo9 from '../images/resume-9.jpg';


const Home = props => {
    return (
        <Fragment>
            <div className={classes.jumbotron}>
                <h1 class="display-4">Build your Resume Now!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Pick a Template</a>
                </p>
            </div>

            <div className={classes.container} >
                <div className={classes['item-1']} >
                    <img src={logo1} />
                </div>
                <div className={classes['item-2']} >
                    <img src={logo2} height="469px" width="354" />
                </div>
                <div className={classes['item-3']} >
                    <img src={logo3} height="469px" width="354" />
                </div>
                <div className={classes['item-4']} >
                    <img src={logo4} height="469px" width="354" />
                </div>
            </div>
            <div className={classes.container} >
                <div className={classes['item-5']} >
                    <img src={logo5} height="469px" width="354" />
                </div>
            </div>
        </Fragment >
    );
};

export default Home;