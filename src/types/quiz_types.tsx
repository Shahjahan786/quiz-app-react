export type Question = {
    question: string
    correctIndex: number
    answers: string[]
	attemptIndex: number
}

export type questionPropsType = {
    question: string
    answers: string[]
    callback: (e:React.FormEvent<EventTarget>, ans:string) => void
}

export type resultPropsType = {
    score: number
	quiz: Question[]
}

