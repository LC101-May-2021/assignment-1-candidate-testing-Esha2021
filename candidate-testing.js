
const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
//let candidateName;
//const candidateName= require('readline-sync');

 let candidateName= "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question= "Who was the first American woman in space?";
let correctAnswer="Sally Ride";
let candidateAnswer=" ";
let questions=["1) Who was the first American woman in space?","2) True or false: 5 kilometer == 5000 meters?","3) (5 + 3)/2 * 10 = ?","4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","5) What is the minimum crew size for the ISS?" ];
let correctAnswers=['Sally Ride','true','40','Trajectory','3'];;
let candidateAnswers=[ ];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName=input.question(" Enter Candidate Name:");
}

function askQuestion() {
for(let i=0;i<questions.length;i++){
  candidateAnswers[i]=input.question(questions[i]);
}


  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//canditateAnswer=input.question(question);

}

function gradeQuiz(candidateAnswers) {
  let grade=0;
  let numberAnswersCorrect=0;
for(let i=0; i<questions.length;i++)
{
  //console.log(correctAnswers[i].toLowerCase());
  if(candidateAnswers[i].toLowerCase()===correctAnswers[i].toLowerCase())
{
  numberAnswersCorrect=numberAnswersCorrect+1;
  //console.log(grade);
}

 }
  // console.log(numberAnswersCorrect);
    grade=numberAnswersCorrect/questions.length*100;
    console.log("Candidate Name:  " +candidateName);
    for (let i=0;i<questions.length;i++)
    {
      console.log(questions[i]);
      console.log("Your Answer:  " + candidateAnswers[i]);
      console.log("Correct Answer:  " + correctAnswers[i]+"\n");
    
    }
  console.log(`>>> overall grade: ${grade}% (${numberAnswersCorrect} of ${questions.length}responses correct ) <<<`);
  if(grade>=80)
  {
    console.log(">>> Status: PASSED <<<");

  }
  else{
    console.log(">>> Status: FAILED <<<");
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
  console.log(`Welcome *${candidateName}!*`);
  
  
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