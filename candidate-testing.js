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

questions[0]= " 1) Who was the first American woman in space? ";


questions[1]="2) True or false: 5 kilometer == 5000 meters?";
questions[2]="3) (5 + 3)/2 * 10 = ?";
questions[3]="4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
questions[4]="5) What is the minimum crew size for the ISS?";	
console.log("\n"+ questions[0]);
canditateAnswers[0]=input.question("your Answer:");
console.log("correctAnswer :"+ correctAnswer[0]);
console.log("\n "+questions[1]);
canditateAnswers[1]=input.question("your Answer:");
console.log("correctAnswer :" + correctAnswer[1]);
console.log("\n "+ questions[2]);
canditateAnswers[2]=input.question("your Answer:");
console.log("correctAnswer :" +correctAnswer[2]);
console.log("\n "+ questions[3]);
canditateAnswers[3]=input.question("your Answer:");
console.log("correctAnswer :"+ correctAnswer[3]);
console.log( "\n "+questions[4]);
canditateAnswers[4]=input.question("your Answer:");
console.log("correctAnswer :" +correctAnswer[4]);
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {
  let grade=0;
for(let i=0; i<=questions.length;i++)
{
  if(canditateAnswers[i]===correctAnswer[i])
{
  grade=grade+1;
  //console.log(grade);
}

 }
  console.log(grade);
  
  let gradescore=grade/questions.length*100;
  console.log(`>>> overall grade: ${gradescore}% (${grade} of ${questions.length}responses correct ) <<<`);
  if(gradescore>=80)
  {
    console.log(">>> Staus:PASSED <<<");

  }
  else{
    console.log(">>> Status:FAILED  <<<");
  }



// else
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  //let grade;Number of Correct Answers) / (Number of Quiz Questions) * 100

//Example Output
  

  return grade;
}

function runProgram() {
  askForName();
  //candidateName=input.question(" Enter Candidate Name:");
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome!");
  
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