import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { CreateUserService } from '../create-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // form : FormGroup;
  // firstName : FormControl = new FormControl("", [Validators.required]);
  // lastName: FormControl = new FormControl("", [Validators.required]);
  // age: FormControl = new FormControl("", [Validators.required]);
  // email: FormControl = new FormControl("", [Validators.required]);
  // password: FormControl = new FormControl("", [Validators.required]);
  // passwordConfirm: FormControl = new FormControl("", [Validators.required]);
  user: User = new User();


//constructor (private fromBuilder: FormBuilder)
  constructor(private userService: CreateUserService, private router: Router) {
    // this.form = this.fromBuilder.group({
    //   firstName : this.firstName,
    //   lastName : this.lastName,
    //   age : this.age,
    //   email : this.email,
    //   password : this.password,
    //   passwordConfirm : this.passwordConfirm
    // })
   }

  ngOnInit(): void {
  }

  // saveUser(){
  //   this.userService.createUser(this.user).subscribe( data =>{
  //     console.log(data);
  //   })
  // }

  onSubmit(){;
    if (this.user) console.log(this.user);
    else console.log("error")

    if(!this.user.emailId.match("^[a-z0-9._%+-]+@[a-z0-9-.]+\\.[a-z]{2,4}$") || this.user.emailId == ""){
       alert("Please enter a valid email.")
    }
    if(this.user.password != this.user.passwordConfirm){
      alert("Password don't match, try again please.")
    }


  }

}
