import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  title='Signup';

  regForm:FormGroup;
  submitted=false;

  constructor(private formbuilder:FormBuilder) { }
 
  ngOnInit(): void {
    this.regForm = this.formbuilder.group({
      'firstName' :['', Validators.required],
      'lastName' : ['', Validators.required],
      'username' : ['', [Validators.required, Validators.minLength(5)]],
      'password' : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      'dob' : ['', Validators.required],
      'country' : ['', Validators.required]
    });

  }

  get f(){ return this.regForm.controls}

  submit(){
    this.submitted = true;
    if(this.regForm.invalid){
      return;
    }
    console.log(JSON.stringify(this.regForm.value));
    alert('Success!! :-)');
    this.submitted = false;
    this.regForm.reset();
  }
}
