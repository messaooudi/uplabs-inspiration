import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { ApolloQueryResult } from 'apollo-client';
import { IFiliere } from '../entities/filiere';

@Injectable()
export class FiliereService {

  constructor(private apollo: Apollo) { }

  getAllFilieres() : Observable<ApolloQueryResult<Query>> {
    return this.apollo.query<Query>({
      query: gql`
      {
        findAllFilieres {
          id,
          value
        }
      }
      `,
    });
  }
}

type Query = {
  findAllFilieres : [IFiliere]
	countFilieres : Number
}
