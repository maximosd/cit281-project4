//import data from p4-data.js
//const data = require("./p4-data.js");
const data = [
  {
    question: "Q1",
    answer: "A1",
  },
  {
    question: "Q2",
    answer: "A2",
  },
  {
    question: "Q3",
    answer: "A3",
  },
];

//getQuestions() returns an array of strings where each element is a question
const { question, answer } = data;
const clonedData = data.slice(0);
data === clonedData; // true

//getQuestions returns object containing all questions
function getQuestions() {
  return data.map((item) => item.question);
}

//getAnswers() returns an array of strings where each element is an answer
function getAnswers() {
  return data.map((item) => item.answer);
}

//getQuestionsAnswers() returns a copy of the original data array of objects
function getQuestionsAnswers() {
  return data.map((item) => {
    return { question: item.question, answer: item.answer };
  });
}

//function getQuestion(number="")
function getQuestion(number = "") {
  if (isNaN(number)) {
    return JSON.stringify(
      { error: "Question number must be a number" },
      null,
      2
    );
  }
  if (number < 1 || number > data.length) {
    return JSON.stringify(
      {
        error: "Question number must be between 1 and " + data.length,
      },
      null,
      2
    );
  }
  return {
    error: "",
    question: data[number - 1].question,
    number: number,
  };
}
//function getAnswer(number="")
function getAnswer(number = "") {
  if (isNaN(number)) {
    return {
      error: "Question number must be a number",
    };
  }
  if (number < 1 || number > data.length) {
    return {
      error: "Question number must be between 1 and " + data.length,
    };
  }
  return {
    error: "",
    answer: data[number - 1].answer,
    number: number,
  };
}

//function getQuestionAnswer(number="")
function getQuestionAnswer(number = "") {
  if (isNaN(number)) {
    return {
      error: "Question number must be a number",
    };
  }
  if (number < 1 || number > data.length) {
    return {
      error: "Question number must be between 1 and " + data.length,
    };
  }
  return {
    error: "",
    question: data[number - 1].question,
    answer: data[number - 1].answer,
    number: number,
  };
}

//test each function
/*
getQuestions();
getAnswers();
console.log(clonedData);
getQuestion(2);
getAnswer(2);
*/

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}
// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit

//////////////////////
// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
};
