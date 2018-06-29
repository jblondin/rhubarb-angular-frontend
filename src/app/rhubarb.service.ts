import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { InitialContainer, UpdateContainer, UiState } from './container';

@Injectable({
  providedIn: 'root'
})
export class RhubarbService {
  private rhubarbUrl = 'http://127.0.0.1:7878';
  constructor(private http: HttpClient) { }

  getGraphContainer(): Observable<InitialContainer> {
    const url = `${this.rhubarbUrl}/graph`;
    return this.http.get<InitialContainer>(url).pipe(
      // tap(_ => console.log('fetched graph')),
      catchError(this.handleError<InitialContainer>())
    );
  }
  getGraphContainerWithState(state: UiState): Observable<UpdateContainer> {
    const url = `${this.rhubarbUrl}/graph`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // console.log(`calling post ${url} with state ${state}`);
    return this.http.post<UpdateContainer>(url, state, httpOptions).pipe(
      // tap(_ => console.log('retrieved new graph')),
      catchError(this.handleError<UpdateContainer>())
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
