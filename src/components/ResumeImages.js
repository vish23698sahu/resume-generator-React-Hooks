import { Fragment } from "react";

import logo1 from '../images/resume-1.jpg';
import logo2 from '../images/resume-2.jpg';
import logo3 from '../images/resume-3.png';
import logo4 from '../images/resume-4.jpg';
import logo5 from '../images/resume-5.jpg';
import logo6 from '../images/resume-6.jpg';
import logo7 from '../images/resume-7.png';
import logo8 from '../images/resume-8.jpg';

import classes from './ResumeImages.module.css';

const ResumeImages = () => {
    return (
        <Fragment>
            <div className={classes.container} >
                <div className={`${classes['item-1']}`} >
                    <img src={logo1} height="469px" width="354" alt="resume 1" />
                </div>
                <div className={`${classes['item-2']}`} >
                    <img src={logo2} height="469px" width="354" alt="resume 2" />
                </div>
                <div className={`${classes['item-3']}`} >
                    <img src={logo3} height="469px" width="354" alt="resume 3" />
                </div>
                <div className={`${classes['item-4']}`} >
                    <img src={logo4} height="469px" width="354" alt="resume 4" />
                </div>
            </div>
            <div className={classes.container} >
                <div className={`${classes['item-5']}`} >
                    <img src={logo5} height="469px" width="354" alt="resume 5" />
                </div>
                <div className={`${classes['item-6']}`} >
                    <img src={logo6} height="469px" width="354" alt="resume 6" />
                </div>
                <div className={`${classes['item-7']}`} >
                    <img src={logo7} height="469px" width="354" alt="resume 7" />
                </div>
                <div className={`${classes['item-8']}`} >
                    <img src={logo8} height="469px" width="354" alt="resume 8" />
                </div>
            </div>
        </Fragment>
    );
};

export default ResumeImages;
