import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { throwError,Subject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PublicService {
  constructor(private http: HttpClient) { }

  getTotalViews() {
    let username = JSON.parse(localStorage.getItem('Identity')).Username;
    console.log(username);
    let params = new HttpParams();
    params = params.append('Username', username);
    console.log('hereeeeeeeeeeee',`${environment.URL}/User/GetTotalViews`,{params: params});
    return this.http.get(`${environment.URL}/User/GetBusinessUserData`,{params: params} ).pipe(
      map(res => {
        console.log("responsee...", res);
        return res
      }),
      catchError(e => {
        console.log('Error at get Likes public service', e);
        return throwError(e);
      })
    );
  }
}
