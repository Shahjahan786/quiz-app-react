import React from 'react';
import { resultPropsType } from './../types/quiz_types'
import QuestionCardResult from './QuestionCardResult'
import { Question } from './../types/quiz_types'


const ResultCard: React.FC<resultPropsType> = ({ score, quiz}) => {
	
	console.log(quiz);

   return (<div className="question-container result-container">
      <h2>Result</h2>

      <p className="result-text">
        You final score is 
          <b> {score}</b> out of <b>{quiz.length}</b>
      </p>
	  
	  {
                    quiz.map((question: Question, ind: number) => {
                        return (
                            <div key={ind}>
                                <QuestionCardResult 
								question= {question.question} correctIndex={question.correctIndex} 
								answers={question.answers}
								attemptIndex={question.attemptIndex}/>
                            </div>
                        )
                    })
                }
	  
    </div>)
}

export default ResultCard;