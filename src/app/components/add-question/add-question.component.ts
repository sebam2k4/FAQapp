import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/Question'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();
  text:string;
  answer:string;


  constructor() { }

  ngOnInit() {
  }
  
  //need EventEmitter
  addQuestion() {
    // first check both fields are not empty or undefined
    if (this.text === undefined || this.text === '' ||
      this.answer === undefined || this.answer === '') {
    } else {
      this.questionAdded.emit({text:this.text,
                              answer:this.answer,
                              hide:true});
      // remove text from input after adding question/answer
      this.text = '';
      this.answer = '';
    };
  }
}
