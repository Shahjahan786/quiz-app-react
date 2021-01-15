import {Question} from './../types/quiz_types'



export const getQuestions = async (): Promise<Question[]> => {
    const res = await fetch(`https://600133f208587400174da700.mockapi.io/api/quiz/questions`);
    let results: Question[] = await res.json();
	
	console.log(results);

    return results;
}