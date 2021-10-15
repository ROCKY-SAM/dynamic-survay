export interface QuestionData {
    questionType: string;
    options :QuestionOptions[];
    isRequired? : boolean|undefined;
}

export interface QuestionOptions {
    id : string;
    answerText : string;
}
