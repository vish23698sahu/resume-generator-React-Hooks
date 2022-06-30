import { Fragment } from "react";
import classes from './FooterComp.module.css'

const FooterComp = (props) => {
    return (
        <Fragment>
            <div>
                <hr />
                <div className={classes.container} >
                    <div className={classes.partOne} >
                        <div className={classes['item-1']} >
                            <p onClick={props.onClickResumeJob} className={classes.onClickHover} >ResumeJob</p>
                        </div>
                        <div className={classes['item-2']} >
                            <i class="bi bi-geo-alt"></i> Tapi Nagar Vaibhavi Bungalows, phase-1 building no.23, Mumbai, Maharashtra India.
                        </div>
                        <div className={classes['item-3']}>
                            <i class="bi bi-envelope-paper-heart-fill"></i> writeMe@resumeJob.com
                        </div>
                        <div className={classes['item-4']} >
                            <div className={classes.onIconHover}><i class="bi bi-facebook onClickHover"></i></div>
                            <div className={classes.onIconHover}><i class="bi bi-instagram onClickHover"></i></div>
                            <div className={classes.onIconHover}><i class="bi bi-linkedin onClickHover"></i></div>
                            <div className={classes.onIconHover}><i class="bi bi-youtube onClickHover"></i></div>
                            <div className={classes.onIconHover}><i class="bi bi-twitter onClickHover"></i></div>
                        </div>
                    </div>
                    <div className={`${classes.partTwo}`} >
                        <div className={`${classes['item-5']}`} onClick={props.onFooterClicks} >Company</div>
                        <div className={`${classes['item-6']}`}>About Us</div>
                        <div className={`${classes['item-7']}`}>Carreers</div>
                        <div className={`${classes['item-8']}`}>Contact Us</div>
                    </div>
                    <div className={`${classes.partThree}`} >
                        <div className={`${classes['item-5']}`}>News</div>
                        <div className={`${classes['item-6']}`}>Top News</div>
                        <div className={`${classes['item-7']}`}>Technologies</div>
                        <div className={`${classes['item-8']}`}>Business</div>
                    </div>
                    <div className={`${classes.partFour}`} >
                        <div className={`${classes['item-5']}`}>Contribute</div>
                        <div className={`${classes['item-6']}`}>Write a Blog</div>
                        <div className={`${classes['item-7']}`}>Write an Article</div>
                        <div className={`${classes['item-8']}`}>Contribute Template</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterComp;