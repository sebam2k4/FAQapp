import { Injectable } from '@angular/core';
import { Question } from '../models/Question'

@Injectable()
export class DataService {
  // create interface 
  questions:Question[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Sebastian',
        hide: true
      },
      {
        text: 'What is your favourite color?',
        answer: 'My favourite color is blue',
        hide: true
      },
      {
        text: 'What is your favourite Coding language?',
        answer: 'Javascript',
        hide: true
      }
    ];
   }

   getQuestions() {
     return this.questions;
   }

   addQuestion(question:Question) {
    this.questions.unshift(question);
   }

   removeQuestion(question:Question) {
     //match question with button
     for(let i = 0; i < this.questions.length; i++){
      if(question == this.questions[i])
        this.questions.splice(i,1);
     }
   }
}
