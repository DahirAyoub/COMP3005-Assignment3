# COMP3005-Assignment3
This project is designed to demonstrate simple CRUD operations on a PostgreSQL database using Node.js. Follow the steps below to set up and run the application.

## Setup

1.Create new database names `assignment3` using pgAdmin4
2.Using the query tool, create a new table called students using this sql:

 ```sql
   CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    enrollment_date DATE
);
```

3.Populate students with this data 
  ```sql
     INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES
    ('John', 'Doe', 'john.doe@example.com', '2023-09-01'),
    ('Jane', 'Smith', 'jane.smith@example.com', '2023-09-01'),
    ('Jim', 'Beam', 'jim.beam@example.com', '2023-09-02');
 ```
4.Clone the repository and navigate to the project directory.
5.Install dependencies using the command: `npm install`
6.Create a `.env` file in the root directory with the following variables:
    - `POSTGRES_USERNAME=your_username`
    - `POSTGRES_PASSWORD=your_password`
    - `POSTGRES_DATABASE=your_database_name`
    - `POSTGRES_PORT=5432`

7.Run the application using the command `node app.js`