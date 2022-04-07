import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  //   isLoggedIn = false;
  private _isLoggedInChild!: boolean;

  constructor() {}

  ngOnInit(): void {}

  get loggedInChildFunction() {
    return this._isLoggedInChild;
  }

  @Input()
  set loggedInChildFunction(val: boolean) {
    this._isLoggedInChild = val;
  }
}
