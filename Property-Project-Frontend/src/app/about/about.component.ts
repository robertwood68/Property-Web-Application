import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None // used to inherit body background-color from the selected component's stylesheet
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
