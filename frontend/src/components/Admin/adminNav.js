import React, { Component } from "react";
import Swal from 'sweetalert2';
import {
    MDBIcon, MDBCardImage,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBNavbarItem, MDBNavbarLink
} from 'mdb-react-ui-kit';

class Navbar extends Component {
    render() {
        function logout() {

            Swal.fire({
                title: "Success!",
                text: "Logout Success",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            }).then(okay => {
                if (okay) {
                    window.location.href = "/AdminLogin";
                }
            });
        }
        return (
            <div>
                <div className="dashboard-header">
                    <nav className="navbar navbar-expand-lg bgTopNav fixed-top">
                        <a className="navbar-brand h1 fw-bold" style={{ fontSize: '25px' }} href="Admin"><MDBIcon fas icon="cut" className="text-danger" size='2x' /> <span className="text-danger">&nbsp;Salon</span><span className="text-dark">-Nee</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbar-right-top">
                                <li className="nav-item square border border-0">
                                    <MDBNavbarItem style={{ paddingRight: "30px", }}>
                                        <MDBNavbarLink style={{ color: 'red', cursor: 'pointer', fontWeight: 'bold', }} active aria-current='page' onClick={logout}>
                                            Logout
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div >

                <div className="nav-left-sidebar sidebar-dark">
                    <div className="menu-list" style={{ paddingBottom: '40%' }}>
                        <nav className="navbar navbar-expand-lg navbar-light shadow-0">
                            <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav flex-column">
                                    <h4 className="mt-4 mb-4 text-warning">&nbsp;&nbsp;&nbsp;Admin Dashboard</h4>
                                    <li className="nav-item">
                                        <a className="nav-link" href="haircareDashboard" style={{ fontSize: '17px' }} aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"> Hair Care & Facial </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="NailpedicareDashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Nail & Pedicare  </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="DressDashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Dress </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="Paymentdashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Payments </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="ProductDashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Products </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="PacakageDashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Package </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="LeaveDashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Staff Leave Form </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="AllleavesDashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Staff Leave Report </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="EmployeeDashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Employee & Salary </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div >
        );
    }
}
export default Navbar; 