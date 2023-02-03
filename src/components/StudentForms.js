import React, { Component } from 'react'
import axios from 'axios'
import StudentService from '../services/StudentService'
import { useState } from 'react'
import '../App.css';








const ADD_STUDENT_URL = "http://localhost:8080/student/";
const GET_STUDENTS_URL = "http://localhost:8080/students/";




class StudentForms extends Component {


    constructor(props) {
        super(props)

        this.state = {
            studentName: '',
            date: '',
            classId: '',
            division: '',
            gender: '',
            rollNo: '',


            students: [],

        }
    }

    nameChanged = event => {
        this.setState({

            studentName: event.target.value.replace(/[^a-z]/gi, "")
        })
    }
    dateChanged = event => {
        this.setState({
            date: event.target.value
        })
    }
    classAdded = event => {
        this.setState({

            classId: event.target.value
        })
    }
    divisionAdded = event => {
        this.setState({
            division: event.target.value
        })
    }
    noAdded = event => {
        this.setState({
            rollNo: event.target.value.replace('.', "")
        })
    }

    genderAdded = event => {
        this.setState({
            gender: event.target.value
        })
    }


    componentDidMount() {

        {
            fetch(GET_STUDENTS_URL)
                .then(res => res.json())
                .then(
                    (students) => {
                        this.setState({ students: students });
                    },
                    (error) => {
                        alert(error);
                    }
                )
        }
    }





    studentTable = event => {
        {
            StudentService.addStudent(this.state).then((result) => {
                console.log("Student added successfully............." + result);
                this.state.students = result;
            })
        }

    }


    render() {


        return (

            <div className='main'>


                <div className='sub-main'>
                    <p> &nbsp;&nbsp; &nbsp;    &nbsp;&nbsp;&nbsp;  </p>

                    <div className='sub'>
                        <form onSubmit={this.studentTable}>
                            <h2 className='msg'><u>Student Form</u></h2>
                            <label >Student Name &nbsp;  :  </label>
                            <input type='text' className='name' placeholder='Enter your name' value={this.state.studentName} onChange={this.nameChanged} required></input><br /><br />
                            <label >Date of Birth &nbsp; &nbsp;: &nbsp; </label>
                            <input type='date' className='date' placeholder='Select your date of birth' value={this.state.date} onChange={this.dateChanged} required></input> <br /><br />
                            <label>Roll number &nbsp; &nbsp;: &nbsp; </label>
                            <input type='number' className='rollno' placeholder='enter your roll number' value={this.state.rollNo} onChange={this.noAdded} required></input><br /><br />

                            <label> Class &nbsp;&nbsp; &nbsp;    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:  &nbsp;</label>
                            <select className='classid' placeholder='Select your class' value={this.state.classId} onChange={this.classAdded} required>
                                <option value=""></option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                                <option value="VI">VI</option>
                                <option value="VII">VII</option>
                                <option value="VIII">VIII</option>
                                <option value="IX">IX</option>
                                <option value="X">X</option>
                                <option value="XI">XI</option>
                                <option value="XII">XII</option>
                            </select>
                            <br /><br />
                            <label> Division &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;: &nbsp; </label>
                            <select className='division' placeholder='Select your class division' value={this.state.division} onChange={this.divisionAdded} required>

                                <option value=""></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="B">D</option>
                                <option value="C">E</option>
                            </select>

                            <br /><br />
                            <div className='gender' >
                                <label>Gender &nbsp;&nbsp; &nbsp;    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;: </label>
                                male: <input type="radio" name={this.setState} onChange={this.genderAdded} value="male" />
                                female: <input type="radio" name={this.setState} onChange={this.genderAdded} value="female" />
                            </div><br /><p>{this.studentTable.x}</p> <br />
                            <button type='submit' float="center" className='ui button blue'>Submit</button>
                        </form>

                    </div>
                    <p> &nbsp;&nbsp; &nbsp;    &nbsp;&nbsp;&nbsp; &nbsp;</p>



                    <div>
                        <div >

                            <table cellPadding="1" cellSpacing="1" border="1"  >
                                <thead>
                                    <tr border="2">
                                        <th border="3" border-style='dashed'>StudentId</th>
                                        <th border="3" border-style='dashed'>Name </th>
                                        <th border="3" border-style='dashed'>Roll no</th>
                                        <th border="3" border-style='dashed'>DOB   </th>
                                        <th border="3" border-style='dashed'>class </th>
                                        <th border="3" border-style='dashed'>division </th>
                                        <th border="3" border-style='dashed'>gender</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.students.map(students =>
                                        <tr border="2" >
                                            <td border="3" border-style='dashed'>{students.studentId}</td>
                                            <td border="3" border-style='dashed'>{students.studentName}</td>
                                            <td border="3" border-style='dashed'>{students.rollNo}</td>
                                            <td border="3" border-style='dashed'>{students.date}</td>
                                            <td border="3" border-style='dashed'>{students.classId}</td>
                                            <td border="3" border-style='dashed'>{students.division}</td>
                                            <td border="3" border-style='dashed'>{students.gender}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table></div>
                    </div>

                </div>

            </div>



        )
    }
}

export default StudentForms
