import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IStudent } from '../../entities/student';

@Component({
  selector: 'sm-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class StudentCardComponent implements OnInit {
  @Input() student : IStudent;
  constructor() { }

  ngOnInit() {
  }

}
