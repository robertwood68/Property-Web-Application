import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form : FormGroup;
  firstName : FormControl = new FormControl("", [Validators.required]);
  lastName: FormControl = new FormControl("", [Validators.required]);
  age: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required]);
  password: FormControl = new FormControl("", [Validators.required]);
  passwordConfirm: FormControl = new FormControl("", [Validators.required]);




  constructor(private fromBuilder: FormBuilder) {
    this.form = this.fromBuilder.group({
      firstName : this.firstName,
      lastName : this.lastName,
      age : this.age,
      email : this.email,
      password : this.password,
      passwordConfirm : this.passwordConfirm
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){;
    return ""
  }

}
