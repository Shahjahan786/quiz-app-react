import React from 'react';
import { Question } from './../types/quiz_types'


const QuestionCardResult: React.FC<Question> = ({question, correctIndex, answers, attemptIndex}) => {
console.log(question)
    return (
	
		
	
        <div className="question-result">
            <div className="question">
                <h4>{question}</h4>
            </div>

            <div className="">
                {
                    answers.map((opt: string, ind: number) => {
						let isCorrect: boolean = (attemptIndex === correctIndex);
						let className = "";
						
						let shouldApplyCss: boolean = ((ind === correctIndex && isCorrect)  || ind === attemptIndex);
						
						if(shouldApplyCss){
							className = isCorrect ? "correct" : "incorrect"
						}
						
						
                        return (
                            <div key={ind}>
                                <label className={`radio ${className}`}>
                                    <input
					
										disabled
                                        type="radio"
                                        name="opt"
                                        value={opt}
                                        checked={isCorrect}
                                        
                                    />
                                    {opt}
                                </label>
								
								
                            </div>
                        )
                    })
					
					
                }
				
				
				<h4>Correct Answer: {answers[correctIndex]}</h4>
				
               
            </div>
        </div>
    )
}

export default QuestionCardResult;