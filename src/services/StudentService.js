import axios from "axios";

const STUDENTS_URL = "http://localhost:8080/students/";
const STUDENT_URL = "http://localhost:8080/student/541/";
const ADD_STUDENT_URL = "http://localhost:8080/student/";

class StudentService{

    // getStudents(){
    //    fetch(STUDENTS_URL);
    // }
    // getStudenById()
    //     fetch(STUDENT_URL);
    // }
    addStudent(data){

        axios.post(ADD_STUDENT_URL,data);
    }
}

export default new StudentService()