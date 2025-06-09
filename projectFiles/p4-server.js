const express = require('express');
const app = express();

const listenPort = 8080;
const listenIP = '127.0.0.1';

const functions = require("./p4-module.js");

app.get("/cit/question", (req, res)=> {
    res.status(200).type('application/json');
    const questions = functions.getQuestions();
    const response = {
        error: "",
        statusCode: 200,
        questions: questions,
    }
    res.send(response);
});
app.get("/cit/answer", (req, res)=> {
    res.status(200).type('application/json');
    const answers = functions.getAnswers();
    const response = {
        error: "",
        statusCode: 200,
        answer: answers,
    }
    res.send(response);
});
app.get("/cit/questionanswer", (req, res)=> {
    res.status(200).type('application/json');
    const questionsAnswers = functions.getQuestionsAnswers();
    const response = {
        statusCode: 200,
        questions_answers: questionsAnswers,
    }
    res.send(response);
});
app.get("/cit/question/:number", (req, res)=> {
    const number = parseInt(req.params.number);
    const question = functions.getQuestion(number);
    if (isNaN(number)) {
        return res.status(400).json({ error: "Invalid question number" });
    }
    res.status(200).type('application/json');
    const response = {
        statusCode: 200,
        question: question,
    };
    res.send(response);
});
app.get("/cit/answer/:number", (req,res) => {
    const number = parseInt(req.params.number);
    const answer = functions.getAnswer(number);
    if (isNaN(number)) {
        return res.status(400).json({ error: "Invalid question number" });
    }
    res.status(200).type('application/json');
    const response = {
        statusCode: 200,
        answer: functions.getAnswer(number),
    };
    res.send(response);
});
app.get("/cit/questionanswer/:number", (req, res)=> {
    const number = parseInt(req.params.number);
    const question = functions.getQuestionAnswer(number);
    if (isNaN(number)) {
        res.status(400).json({ error: "Invalid question number" });
    }
    res.status(200).type('application/json');
    const response = {
        statusCode: 200,
        question_answer: question,
    };
    res.send(response);
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
  res.send('<h1>Error 404: Page not found!</h1>');
});

app.listen(listenPort, listenIP, () => {
  console.log(`Server running at http://${listenIP}:${listenPort}`);
});