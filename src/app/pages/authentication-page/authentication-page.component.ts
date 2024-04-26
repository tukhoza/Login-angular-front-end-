import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {NgIf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.scss'
})
export class AuthenticationPageComponent implements OnInit {

  pageNum:number = 1;
  
  singinForm: FormGroup = this.formBuilder.group({
    username: '',
    password: ''
  })

  signupForm: FormGroup = this.formBuilder.group({
    email: '',
    username: '',
    password: ''
  })

  constructor(private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.pageNum = 1;
  }

  onPageNum(pageNum:number){
    this.pageNum = pageNum;
  }

  onSignin(){
    console.log("Signin >", this.singinForm.value)
  }

  onSignup(){
    console.log("Signup >", this.signupForm.value)
  }

}
