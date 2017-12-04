import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import {ITodo} from './todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  todos:Array<ITodo>;
  constructor(private _userService: UserService) { }
  ngOnInit() {
     this._userService.getUsers().subscribe(todos=>this.todos=todos);
  }

}
