import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ITodo} from './todo';
@Injectable()
export class UserService {
private _url='https://jsonplaceholder.typicode.com/todos';
  constructor(private _http:HttpClient){
  }
  getUsers(): Observable<ITodo[]> {
    return this._http.get<ITodo[]>(this._url);
  }
}