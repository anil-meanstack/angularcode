import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import {Router}from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data!:FormGroup;

  constructor(private _router: Router) { }
  
  ngOnInit(): void {
    this.data = new FormGroup({   
      email : new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
  get input():{ [key: string]: AbstractControl }{
    return this.data.controls;

  }
  datafunctuion(){
    console.log(this.data.valid);
    if(this.data.valid){
      this._router.navigateByUrl('/dashboad');
    }
    
  }
}
