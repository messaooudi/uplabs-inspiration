import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { ApolloQueryResult } from 'apollo-client';
import { INiveau } from '../entities/niveau';

@Injectable()
export class NiveauService {

  constructor(private apollo: Apollo) { }

  getAllNiveaux() : Observable<ApolloQueryResult<Query>> {
    return this.apollo.query<Query>({
      query: gql`
      {
        findAllNiveaux {
          id,
          value
        }
      }
      `,
    });
  }
}

type Query = {
  findAllNiveaux : [INiveau]
	countNiveaux : Number
}
