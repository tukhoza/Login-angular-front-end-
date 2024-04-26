import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.scss'
})
export class AuthenticationPageComponent implements OnInit {

  pageNum:number = 1;
  
  singinForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  signupForm = this.formBuilder.group({
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

}
