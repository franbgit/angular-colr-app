import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { RandomColor } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  getRandomColor(): Observable<RandomColor> {
    const salt = new Date().getTime();
    return this.http
      .get<RandomColor>(`${this.apiUrl}/json/color/random?${salt}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: {
    error: { message: any };
    status: any;
    message: any;
  }): Observable<never> {
    const errorMessage =
      error.error instanceof ErrorEvent
        ? `Error: ${error.error.message}` // client-side error
        : `Error Code: ${error.status}\nMessage: ${error.message}`; // server-side error
    console.log(errorMessage);
    window.alert('An error has occurred, please try again later');
    return throwError(errorMessage);
  }
}
