
import React, { useState, useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBCardImage,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { reactLocalStorage } from 'reactjs-localstorage';

function Footer() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
    return (
        <div>
            <footer className="text-center text-lg-start bg-dark text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span className="text-muted text-capitalize" style={{ letterSpacing: '2px' }}>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h4 className="text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>
                                    <MDBIcon fas icon="cut" className="text-danger" size='2x' /> <span className="text-danger">&nbsp;Salon</span><span className="text-white">-Nee</span>
                                </h4>
                                <p>
                                    Salon-Nee is a leader in the beauty industry and has been a trusted supplier of high-quality hair care and beauty products since 2007. Our products are sourced from trusted suppliers from around the world and are carefully selected to meet the needs and expectations of our clients. We take pride in providing our clients with exceptional products that help them achieve their desired look and feel confident in their appearance                                  </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-normal text-F1F1F1 mb-4">
                                    Userful Links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Affilliate</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Sitemap</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Careers</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-normal text-F1F1F1 mb-4">
                                    &nbsp;
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Blogs</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Contact Us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help Center</a>
                                </p>
                                <p>
                                    <a href="AdminLogin" className="text-reset">Admin</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-normal text-F1F1F1 mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i>SLIIT Malabe Campus, New Kandy Rd, Malabe 10115</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    salonnee@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 94 11 90 2903</p>
                                <p><i className="fas fa-print me-3"></i> + 94 33 78 9029</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="https://elearning.com">SalonNee</a>
                </div>

            </footer>
        </div>
    )
};

export default Footer;