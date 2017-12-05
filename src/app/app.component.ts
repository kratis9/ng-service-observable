import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';
import {ITodo} from './todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  todos:Array<ITodo>;
  constructor(private _userService: TodoService) { }
  ngOnInit() {
     this._userService.getTodoList().subscribe(todos=>this.todos=todos);
  }

}
