import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  encapsulation: ViewEncapsulation.None // used to inherit body background-color from the selected component's stylesheet
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
