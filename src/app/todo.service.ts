import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponce} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/catch';
import {ITodo} from './todo';
import { error } from 'selenium-webdriver';
@Injectable()
export class TodoService {
private _url='https://jsonplaceholder.typicode.com/todos';
  constructor(private _http:HttpClient){
  }
  getTodoList(): Observable<ITodo[]> {
    return this._http.get<ITodo[]>(this._url)
    .catch(this.handleError);
  }
private handleError(err:HttpErrorResponce){
console.log(err);

}
}
