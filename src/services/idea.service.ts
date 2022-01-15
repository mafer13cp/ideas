import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  baseUrl: string = "https://ezassi-ideas.herokuapp.com";

  constructor(private http:HttpClient) { }

  //#region CRUD

  //GET
  public getIdeas():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ideas`);
  }

  //#endregion
}
