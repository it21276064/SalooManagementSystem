
import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navbar from "./adminNav";

function Admin() {

    return (
        <div className="dashboard-main-wrapper" >
            <Navbar />
            <div className="dashboard-wrapper">
                <div style={{ paddingTop: '3%', paddingLeft: '2%', width: '98%' }}>

                    <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{ color: 'black' }}><i className="fas fa-home"></i>Admin Dashboard</h4>
                    <hr />

                    <MDBRow style={{ marginTop: '6%' }}>
                        <MDBCol sm='4'>
                            <a href="haircareDashboard">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                        <MDBIcon fas icon="cut text-muted" /> <br /> <span>Hair Care & Facial</span>
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="NailpedicareDashboard">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                        <MDBIcon fas icon="shoe-prints text-muted" /> <br /> Nail & Pedicare
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="PacakageDashboard">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                        <MDBIcon fas icon="cube text-muted" /> <br />Package
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{ marginTop: '1%' }}>
                        <MDBCol sm='4'>
                            <a href="DressDashboard">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                        <MDBIcon fas icon="tshirt text-muted" /> <br />Dress
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="Paymentdashboard">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                        <MDBIcon fas icon="credit-card text-muted" /> <br />Payments
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="ProductDashboard">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                        <MDBIcon fab icon="product-hunt" className="text-muted" /> <br />Products
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>

                        <MDBCol sm='4'>
                            <a href="LeaveDashboard">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                        <MDBIcon fas icon="user-slash text-muted" /> <br />Staff Leave Form
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="AllleavesDashboard">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                        <MDBIcon fas icon="user-slash text-muted" /> <br />Staff Leave Report
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                        <MDBCol sm='4'>
                            <a href="EmployeeDashboard">
                                <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                    <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                        <MDBIcon fas icon="users text-muted" /> <br />Employee & Salary
                                    </MDBCardHeader>
                                </MDBCard>
                            </a>
                        </MDBCol>
                    </MDBRow>

                </div>
            </div>
        </div>
    )
};


export default Admin;