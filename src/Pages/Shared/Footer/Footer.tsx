import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='myfootecss'>
            <div className=" mt-5">
                <div className="card ">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h2 style={{ color: "#8ca3ba" }}> <img style={{ width: "40px", height: "40px", marginRight: "10px" }}
                                        src="https://github.com/SachiniRasanga/RP_Project_mobile_app/blob/master/get.png?raw=true" />
                                        AYUSHA</h2>
                                </div>
                                <p className="card-text">
                                    The main objective of the proposed Hela Wedakama 
                                    system is to provide More Reliable User Experience of Traditional Health Care.
                                </p>
                                <div className="social mt-2 mb-3">
                                    <i className="fa fa-facebook-official fa-lg" onClick={() => { window.location.replace("https://web.facebook.com/sachini.abeywardhana/?_rdc=1&_rdr") }}></i>
                                    <i className="fa fa-instagram fa-lg" onClick={() => { window.location.replace("") }}></i>
                                    <i className="fa fa-twitter fa-lg" onClick={() => { window.location.replace("") }}></i>
                                    <i className="fa fa-linkedin-square fa-lg" onClick={() => { window.location.replace("https://www.linkedin.com/in/sachini-abeywardhana-3a8926218/") }}></i>
                                    <i className="fa fa-github" onClick={() => { window.location.replace("https://github.com/SachiniRasanga") }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Team Members</h5>
                            <ul>
                                <li>Ashan Pasidu</li>
                                <li>Gayashan Fernando</li>
                                <li>Sachini Abeywardhana</li>
                                <li>Nethu Nipuna</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Downloads</h5>
                            <ul className="card-text">
                                <li>Project Proposal</li>
                                <li>Project Charter</li>
                                <li>Log Book</li>
                                <li>Final Report</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Contact Us</h5>
                            <ul className="card-text">
                                <li>SLIIT</li>
                                <li>Malabe</li>
                                <li>Kaduwela</li>
                                <li>076 6135565</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="row" style={{ fontSize: "10px", textAlign: "center" }}>
                        <div>
                            Designed and Developed by Ayusha Team <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;