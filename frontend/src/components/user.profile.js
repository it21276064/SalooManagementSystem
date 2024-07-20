import React, { useState, useEffect } from 'react';
import { MDBIcon, MDBBtn, MDBCol, MDBCard, MDBCardImage, MDBRow, MDBCardBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navbar from './main_parts/navbar.user.log.js';
import Footer from './main_parts/footer.js';
import './APIUrl';

function UserLogin() {

    const userName = sessionStorage.getItem('user_name');
    const [profile, setProfile] = useState([]);

    const getProfile = async (e) => {
        try {
            const res = await axios.get(global.APIUrl + "/user/viewUserProfie/" + userName);
            setProfile(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    function remove() {
        axios.delete(global.APIUrl + "/user/deleteuser/" + userName).then(() => {
            Swal.fire({
                title: "Error!",
                text: "Profile Deleted",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            })
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);


        }).catch((err) => {
            Swal.fire({
                title: "Error!",
                text: "Profile Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div>
            <div className="pt-1 pb-1" style={{ backgroundColor: '#F4F4F4' }}>
                <center>
                    <small style={{ fontSize: '14px', letterSpacing: '2px' }} className="text-muted text-capitalize">The Largest Salon Service Hub In The Sri Lanka</small>
                </center>
            </div>
            <Navbar />
            <MDBRow style={{ marginTop: '7%', marginBottom: '10%', width: '99%' }}>
                <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-12 col-xl-4">
                                {profile.map((profile, key) => (
                                    <div className="card" style={{ borderRadius: '15px' }}>
                                        <div className="card-body text-center">
                                            <div className="mt-3 mb-4">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                                    className="rounded-circle img-fluid" style={{ width: '100px' }} />
                                            </div>
                                            <h4 className="mb-2">{profile.firstName} {" "} {profile.lastName}</h4>
                                            <p className="text-muted mb-4">Email : {profile.email}</p>
                                            <div className="mb-4 pb-2">
                                                <button type="button" className="btn btn-outline-primary btn-floating">
                                                    <i className="fab fa-facebook-f fa-lg"></i>
                                                </button>
                                                <button type="button" className="btn btn-outline-primary btn-floating">
                                                    <i className="fab fa-twitter fa-lg"></i>
                                                </button>
                                                <button type="button" className="btn btn-outline-primary btn-floating">
                                                    <i className="fab fa-skype fa-lg"></i>
                                                </button>
                                            </div>
                                            <button type="button" className="btn btn-primary btn-rounded btn-lg" onClick={remove}>
                                                Delete Profile
                                            </button>
                                            <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                                <div>
                                                    <p className="mb-2 h5">8471</p>
                                                    <p className="text-muted mb-0">Wallets Balance</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="mb-2 h5">8512</p>
                                                    <p className="text-muted mb-0">Income amounts</p>
                                                </div>
                                                <div>
                                                    <p className="mb-2 h5">4751</p>
                                                    <p className="text-muted mb-0">Total Transactions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>
            </MDBRow>
            <Footer />
        </div>
    )
};

export default UserLogin;