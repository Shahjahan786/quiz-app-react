import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getQuestions} from './api/quiz_service'
import { Question } from './types/quiz_types';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';

function App() {
	
	let [quiz, setQuiz] = useState<Question[]>([])
    let [currentStep, setCurrentStep] = useState(0)
	let [score, setScore] = useState(0)
	let [showResult, setShowResult] = useState(false)


	useEffect(() => {
    async function fetchData() {
      const questions: Question[] = await getQuestions();
      setQuiz(questions);
    }
    fetchData();
  }, []);
	
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: Question = quiz[currentStep];

    console.log("correct And: " + currentQuestion.answers[currentQuestion.correctIndex] + "--user Selection:" + userAns)

    if (userAns === currentQuestion.answers[currentQuestion.correctIndex]) {
      setScore(++score);
    }
	
	currentQuestion.attemptIndex =  currentQuestion.answers.indexOf(userAns);
	console.log(currentQuestion)

    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else {
      setShowResult(true);
    }
  }

  if (!quiz.length)
    return <h3>Loading.. </h3>

  if(showResult){
    return (
	<ResultCard 
	score={score} 
	quiz = {quiz}/>
	)
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuestionCard
        answers={quiz[currentStep].answers}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;

