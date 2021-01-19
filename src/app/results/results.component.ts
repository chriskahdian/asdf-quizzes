import { Component, Input } from '@angular/core';
import { AsyncValidatorFn } from '@angular/forms';
import { count } from 'rxjs/operators';
import { Answers } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() answers: Answers;
}
