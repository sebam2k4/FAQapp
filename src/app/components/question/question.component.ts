import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../../services/data.service';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question:Question;
  showHide:string;

  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.showHide = 'Show'
  }

  removeQuestion(question:Question) {
    this.dataService.removeQuestion(question)
  }

  hideShowAnswer(question:Question) {
    this.question.hide = !this.question.hide;
    if (question.hide === true) {
      this.showHide = 'Show';
    } else {
      this.showHide = 'Hide';
    }
  }
}
