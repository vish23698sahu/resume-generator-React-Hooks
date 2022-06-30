import { Fragment } from "react";
import './Navbar.css';


const Navbar = (props) => {
    return <Fragment>
        <nav className="navbar colorBlue navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand colorTextWhite" onClick={props.toGoHome} >ResumeJob</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link colorTextWhite" onClick={props.toGoHome} aria-current="page" >Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle colorTextWhite" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resume
                            </a>
                            <ul class="dropdown-menu colorBlue " aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item dropDownColour colorTextWhite" href="#">Education</a></li>
                                <li><a class="dropdown-item dropDownColour colorTextWhite" href="#">First Job</a></li>
                                <li><a class="dropdown-item dropDownColour colorTextWhite" href="#">Internship</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-primary colorTextWhite" onClick={props.toGoHome} type="submit">Search</button>
                    </form>
                    <div onClick={props.onClickIcon} className={"iconLogin"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    </Fragment >
};


export default Navbar;
