import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import MentorService from '../services/MentorService';

export default function AddMentor() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');
    const [sessionName, setSessionName] = useState('');
    const [sessionLink, setSessionLink] = useState('');
    const Navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateMentor = (e) => {
        e.preventDefault();

        const mentor = { firstName, lastName, designation, email, sessionName, sessionLink }
        if (id) {

            MentorService.updateMentor(mentor, id).then((response) => {
                Navigate('/mentors');
            }).catch(error => {
                console.log(error)
            })

        } else {

            MentorService.createMentor(mentor).then((response) => {
                console.log(response.data)
                Navigate('/mentors');

            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {

        MentorService.getMentorById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setDesignation(response.data.designation)
            setEmail(response.data.email)
            setSessionName(response.data.sessionName)
            setSessionLink(response.data.sessionLink)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className='text-center'>{(id) ? "Update" : "Add"} Mentor </h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Designation :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter designation"
                                        name="designation"
                                        className="form-control"
                                        value={designation}
                                        onChange={(e) => setDesignation(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email Id :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Email Id"
                                        name="emailId"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Session Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Session Name"
                                        name="sessionName"
                                        className="form-control"
                                        value={sessionName}
                                        onChange={(e) => setSessionName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Session Link :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Session Link"
                                        name="sessionLink"
                                        className="form-control"
                                        value={sessionLink}
                                        onChange={(e) => setSessionLink(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateMentor(e)} >Submit </button>
                                <Link to='/mentors' className='btn btn-danger' style={{ 'marginLeft': '1rem' }}>Cancel</Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
