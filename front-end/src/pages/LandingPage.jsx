import '../styles.css';
import React from 'react'
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (
        <>
            <PageHeader pageTitle="Home" pageSubheader="Welcome to the entertainment.com. This is some more sample welcome text" />
            <div className={"container px-4 px-lg-5"}>
                <div className={"row gx-4 gx-lg-5 justify-content-center"}>
                    <div className={"col-md-10 col-lg-8 col-xl-7"}>
                        <div className={"text-center"}>
                            <h1>Welcome to the Entertainer Booking Website</h1>
                            <p>This is a website where you can book entertainers for all your entertainment needs. Generic Entertainment&trade; is committed to providing top of the line high quality entertainment</p>
                            <div className={"figure-img"}><img width="50%" src="../JoelHiltonHeadshot (1).jpg" alt="" /></div>
                            <Link className={"btn btn-primary"} to="/entertainers">View Entertainers</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
