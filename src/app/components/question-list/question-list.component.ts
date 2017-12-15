import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Object[];

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

  ngOnInit() {
  }

}
