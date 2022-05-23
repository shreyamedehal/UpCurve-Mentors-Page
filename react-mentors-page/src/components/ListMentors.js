import React, { useState, useEffect } from 'react'
import MentorService from '../services/MentorService'
import { Link } from 'react-router-dom';

export default function ListMentors() {

    const [mentors, setMentors] = useState([])

    useEffect(() => {
      
        getAllMentors()
    }, [])

    const getAllMentors = () => {
        MentorService.getAllMentors().then((response) => {
            setMentors(response.data);
        }).catch(error =>{
            console.log(error);
        })

    }

    const deleteMentor = (mentorId) => {
        MentorService.deleteMentor(mentorId).then((response) =>{
            getAllMentors();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }


    return (
        <div className='container'>
            <h2 className="text-center"> UpCurve Mentors </h2>
            <Link to = "/add-mentor" className = "btn btn-primary mb-2" > Add Mentor </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Designation </th>
                    <th> Email Id </th>
                    <th> Session Name </th>
                    <th> Session Link </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        mentors.map(
                            mentor =>
                                <tr key={mentor.id}>
                                    <td> {mentor.id} </td>
                                    <td> {mentor.firstName} {mentor.lastName}</td>
                                    <td>{mentor.designation}</td>
                                    <td>{mentor.email}</td>
                                    <td>{mentor.sessionName}</td>
                                    <td>{mentor.sessionLink}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-mentor/${mentor.id}`}>Update</Link>
                                        <button className = "btn btn-danger" onClick = {() => deleteMentor(mentor.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
