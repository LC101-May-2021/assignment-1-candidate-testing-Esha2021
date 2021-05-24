const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
//let candidateName;
//const candidateName= require('readline-sync');

 let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName=input.question(" Enter Candidate Name:");
}

function askQuestion() {
questions=[1,2,3,4,5];
correctAnswer=['Sally Ride','true','40','Trajectory',3];
canditateAnswers=[1,2,3,4,5];

questions[0]= "1...Who was the first American woman in space? ";

questions[1]="2...True or false: 5 kilometer == 5000 meters?";
questions[2]="3...(5 + 3)/2 * 10 = ?";
questions[3]="4...Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
questions[4]="5..What is the minimum crew size for the ISS?";	
console.log( questions[0]);
canditateAnswers[0]=input.question("your Answer:");
console.log("correctAnswer :"+ correctAnswer[0]);
console.log( questions[1]);
canditateAnswers[1]=input.question("your Answer:");
console.log("correctAnswer :" + correctAnswer[1]);
console.log( questions[2]);
canditateAnswers[2]=input.question("your Answer:");
console.log("correctAnswer :" +correctAnswer[2]);
console.log( questions[3]);
canditateAnswers[3]=input.question("your Answer:");
console.log("correctAnswer :"+ correctAnswer[3]);
console.log( questions[4]);
canditateAnswers[4]=input.question("your Answer:");
console.log("correctAnswer :" +correctAnswer[4]);
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {
  let grade=0;
if(correctAnswer[0]===canditateAnswers[0])
{
  grade=grade+1;

}
if(correctAnswer[1]===canditateAnswers[1])
{
  grade=grade+1;

}
if(correctAnswer[2]===canditateAnswers[2])
{
  grade=grade+1;

}
if(correctAnswer[3]===canditateAnswers[3])
{
  grade=grade+1;

}
if(correctAnswer[4]===canditateAnswers[4])
{
  grade=grade+1;

}else{
  grade=0;
}

  
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  //let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  //candidateName=input.question(" Enter Candidate Name:");
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};