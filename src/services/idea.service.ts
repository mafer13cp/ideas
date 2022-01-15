import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Idea } from 'src/interfaces/idea';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  baseUrl: string = "https://ezassi-ideas.herokuapp.com";

  constructor(private http:HttpClient) { }

  //#region CRUD

  //GET
  public getIdeas():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ideas/`);
  }
  public getIdea(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ideas/${id}`);
  }

  //POST
  public postIdea (idea: any):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          'key': 'x-api-key',
          'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',

      })
  };
    const body = JSON.stringify(idea);
    console.log(body);
    let x = this.http.post(`${this.baseUrl}/ideas/`,body, httpOptions);
    console.log(x);
    return x;
  }
  public putIdea (idea: any):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(idea);
    console.log(body);
    let x = this.http.put(`${this.baseUrl}/ideas/`,body, {'headers': headers, observe: 'response'});
    console.log(x);
    return x;
  }

  public delIdea(id: number):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.get<any>(`${this.baseUrl}/ideas/${id}`, {'headers': headers});
  }

  //#endregion
}
