import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
=======
>>>>>>> 5bef34513ffea24496918406a3a0aed133e81636

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
<<<<<<< HEAD
  form : FormGroup;
  calendar : FormControl = new FormControl("", [Validators.required]);
  numberOfPeople : FormControl = new FormControl("", Validators.required);
  occasion : FormControl = new FormControl("", Validators.required);

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      calendar : this.calendar,
      numberOfPeople : this.numberOfPeople,
      occasion : this.occasion
    });
  }
=======

  constructor() { }
>>>>>>> 5bef34513ffea24496918406a3a0aed133e81636

  ngOnInit(): void {
  }

<<<<<<< HEAD
  onSubmit(){
    return "";
  }

=======
>>>>>>> 5bef34513ffea24496918406a3a0aed133e81636
}
