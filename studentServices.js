// Import the PostgreSQL client from client.js
import { client } from "./client.js";

//Retrieves all student records from the database.
export async function getAllStudents(){
    try {
        const res = await client.query('SELECT * FROM students');
        res.rows.forEach(row =>console.log(row));
    } catch (error) {
        console.log(error);
    }
}

//Add student to the database
export async function addStudent(first_name, last_name, email, enrollment_date){
    try {
        //Query to add new student 
        const query = 'INSERT INTO students(first_name, last_name, email, enrollment_date) VALUES($1,$2,$3,$4)';
        const values = [first_name, last_name, email, enrollment_date];
        await client.query(query,values);
    } catch (error) {
        console.log(error);
    }
}

//Updates the email address of a specific student in the database.
export async function updateStudentEmail(student_id, new_email){
    try {
        const query = 'UPDATE STUDENTS SET email = $1 WHERE student_id = $2';
        const values = [new_email,student_id];
        await client.query(query,values)
    } catch (error) {
        console.log(error);
    }
}

//Deletes a student record from the database.
export async function deleteStudent(student_id){
    try {
        const query = 'DELETE FROM STUDENTS WHERE student_id = $1';
        await client.query(query,[student_id]);
    } catch (error) {
        console.log(error);
    }
}