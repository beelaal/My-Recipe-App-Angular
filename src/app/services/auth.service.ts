import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }
  // get authenticated value
  isAuthenticated() {
    return this.authenticationState.value;
  }
  // login
  login(credentials) {
    return this.http.post(`${environment.URL}/sign-in`, credentials)
      .pipe(
        map(res => {
          this.authenticationState.next(true);
          return res;
        }),
        catchError(e => {
          console.log(e);
          return throwError(e);
        })
      );
  }
  // logout
  logout() {

    sessionStorage.clear();
    localStorage.clear();
    this.authenticationState.next(false);
  }
  // get current login user details
  getUserDetails(userId) { 
    return this.http.post(`${environment.URL}/get-user-details`, userId).pipe(
      map(res => {
        return res;
      }),
      catchError(e => {
        console.log('Error at get user details service', e);
        return throwError(e);
      })
    );
  }    
  saveRecipes(formData) {
    console.log("form data....", formData);
    return this.http.post(`${environment.URL}/add-recipe`, formData)
      .pipe(
        map(res => {  
          return res;
        }),
        catchError(e => {
          console.log(e);
          return throwError(e);
        })
      );
  }
  editRecipes(formData) {
    console.log("form data....", formData);
    return this.http.post(`${environment.URL}/update-recipe`, formData)
      .pipe(
        map(res => {  
          return res;
        }),
        catchError(e => {
          console.log(e);
          return throwError(e);
        })
      );
  }
  getRecipeDetails(id) {
    console.log("form data....", id);
    let params = new HttpParams();
        params = params.set("id", id);
    return this.http.get(`${environment.URL}/get-recipe`, {params})
      .pipe(
        map(res => {  
          return res;
        }),
        catchError(e => {
          console.log(e);
          return throwError(e);
        })
      );
  }
  removeRecipe(id) { 
    return this.http.post(`${environment.URL}/remove-recipe`, id)
      .pipe(
        map(res => {  
          return res;
        }),
        catchError(e => {
          console.log(e);
          return throwError(e);
        })
      );
  }
  uploadImageOnS3(base64) { 
    let headers = new Headers({Accept: 'multipart/form-data'});
    headers.append('enctype', 'multipart/form-data');
    return this.http.post(`${environment.URL}/upload-recipe`, base64)
      .pipe(
        map(res => {  
          return res;
        }),
        catchError(e => {
          console.log(e);
          return throwError(e);
        })
      );
  }
  updateProfileImage(data) {
    let username = JSON.parse(localStorage.getItem('Identity')).Username;
    data.Username = username;
    console.log(data);
    return this.http.post(`${environment.URL}/User/UpdateProfilePicture`, data)
      .pipe(
        map(res => {  
          return res;
        }),
        catchError(e => {
          console.log(e);
          return throwError(e);
        })
      );
  }
  getAllRecipes() {
    return this.http.get(`${environment.URL}/list-all-recipes`)
      .pipe(
        map(res => {  
          return res;
        }),
        catchError(e => {
          console.log(e);
          return throwError(e);
        })
      );
  }
  updateProfile(formData) {  
    return this.http.post(`${environment.URL}/update-account`, formData)
      .pipe(
        map(res => {  
          return res;
        }),
        catchError(e => {
          console.log(e);
          return throwError(e);
        })
      );
  }

}
