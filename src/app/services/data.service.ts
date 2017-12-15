import { Injectable } from '@angular/core';
import { Question } from '../models/Question'

@Injectable()
export class DataService {
  // create interface 
  questions:Question[];

  constructor() {
    /* will be using local storage instead
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
    ]; */
   }

   // get questions from local storage
   getQuestions() {
    // Local Storage - needs to be saved in string (JSON.stringify) and 
    // when pulling out data need to convert back to an array (JSON.parse)
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    

    return this.questions;
   }

   // add question from local storage
   addQuestion(question:Question) {
    this.questions.unshift(question);

    //init local variable
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // add new question
      questions.unshift(question);
      // reset local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
   }

   // remove question from local storage
   removeQuestion(question:Question) {
    //match question with button to delete correct question
    for(let i = 0; i < this.questions.length; i++){
      if(question == this.questions[i])
        this.questions.splice(i,1);
        // reset local storage
        localStorage.setItem('questions', JSON.stringify(this.questions));
     }
   }
}
