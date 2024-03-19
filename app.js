// Import functions from studentServices and the PostgreSQL client
import { getAllStudents,addStudent,updateStudentEmail,deleteStudent } from "./studentServices.js";
import { client } from "./client.js";

// Main function to run database operations
async function main(){
    try {
        await client.connect()   // Connect to the PostgreSQL database
        console.log('Connected to PostgreSQL'); 

        console.log('Calling getAllStudents...');     
        await getAllStudents();

        console.log('Calling addStudent...');
        await addStudent('Amy','Scoot','amy.scoot@example.com','2024-01-01');

        console.log('Calling updateStudentEmail...');
        await updateStudentEmail(3,'jimmy.doe@example.com');

        console.log('Calling deleteStudent...');
        await deleteStudent(1);
    } catch (error) {
        console.log(error);
    }finally {
        await client.end(); // Ensure the database connection is closed
        console.log('Disconnected from PostgreSQL');
    }
}

main();

