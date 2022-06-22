import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  encapsulation: ViewEncapsulation.None // used to inherit body background-color from the selected component's stylesheet
})
export class BookingComponent implements OnInit {
  form : FormGroup;
  calendar : FormControl = new FormControl("", [Validators.required]);
  numberOfPeople : FormControl = new FormControl("", Validators.required);
  occasion : FormControl = new FormControl("", Validators.required);
  renterInfo : FormControl = new FormControl("", Validators.required);

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      calendar : this.calendar,
      numberOfPeople : this.numberOfPeople,
      occasion : this.occasion,
      renterInfo : this.renterInfo
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    return "";
  }
}
