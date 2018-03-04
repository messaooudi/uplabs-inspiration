import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { ICycle } from '../entities/cycle';
import { ApolloQueryResult } from 'apollo-client';

@Injectable()
export class CycleService {

  constructor(private apollo: Apollo) { }

  getAllCycles() : Observable<ApolloQueryResult<Query>> {
    return this.apollo.query<Query>({
      query: gql`
      {
        findAllCycles {
          id,
          value
        }
      }
      `,
    });
  }
}

type Query = {
  findAllCycles : [ICycle]
	countCycles : Number
}
