const express = require('express');
const app = express();

// Set listen IP and port
const listenPort = 8080;
const listenIP = '127.0.0.1';

//array of students
const students = [
    {
      id: 1,
      last: "Last1",
      first: "First1",
    },
    {
      id: 2,
      last: "Last2",
      first: "First2",
    },
    {
      id: 3,
      last: "Last3",
      first: "First3",
    }
  ];

app.get('/cit/student', (req, res) => {
    res.status(200).type('application/json');
    res.send(students);
});

app.get('/cit/student/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(stud => stud.id === studentId);
    if (student) {
        res.status(200).type('application/json');
        res.send(student);
    } else {
        res.status(404).type('application/json');
        res.send({error: "Student not found"});
    }
});
//Add a POST route handler that will accept a JSON request body with properties last and first. The server code must handle the POST verb, and add the last and first request body data to the array, then return the new array entry, including the new id value.
app.post('/cit/student/', (req, res) => {
    // Extract data from query parameters
    const { last, first } = req.query;

    // Validate that both 'last' and 'first' are provided
    if (!last || !first) {
        res.status(400).type('application/json');
        res.send({ error: "Both 'last' and 'first' query parameters are required." });
        return;
    }

    // Create a new student object
    const newStudent = {
        id: students.length + 1, // Generate a new ID
        last,
        first
    };

    // Add the new student to the array
    students.push(newStudent);

    // Respond with the new student
    res.status(201).type('application/json');
    res.send(newStudent);
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(listenPort, listenIP, () => {
  console.log(`Server running at http://${listenIP}:${listenPort}`);
});