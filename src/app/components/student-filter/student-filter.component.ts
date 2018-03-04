import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ICycle } from '../../entities/cycle';
import { IFiliere } from '../../entities/filiere';
import { INiveau } from '../../entities/niveau';
import { filter } from 'graphql-anywhere/lib/utilities';
import { Observable } from 'apollo-link';

@Component({
  selector: 'sm-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentFilterComponent implements OnInit {

  @Input() cycles: ICycle[]
  @Input() filieres: IFiliere[]
  @Input() niveaux: INiveau[]

  @Output() change: EventEmitter<StudentFilter> = new EventEmitter<StudentFilter>()

  filter: StudentFilter = new StudentFilter();
  constructor() {
  }

  ngOnInit() {
  }

  click({ _id, name }) {
    const index = this.filter[_id].indexOf(name);
    if (index != -1)
      this.filter[_id].splice(index, 1);
    else
      this.filter[_id].push(name)
    this.change.emit(this.filter);
  }
}

class StudentFilter {
  cycle: ICycle[] = []
  filter: IFiliere[] = []
  niveau: INiveau[] = []
}
