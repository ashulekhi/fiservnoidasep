import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"


import {CommonService} from "../common.service"
import {HttpClient} from "@angular/common/http"
var $  = window["jQuery"];
console.log("jquery"  , $);

var loginapi = "https://ashuapi.herokuapp.com/api/login"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email:"",
    password:""
  }

  constructor(private router :  Router , public cs : CommonService , private http:HttpClient) { 
    console.log(">>>>>>>" ,  this.router)
  }

  login(){
    this.http.post(loginapi , this.user).subscribe((response)=>{
      console.log("response from login api", response);
      if(response["token"]){
        localStorage.email= response["email"]
        console.log(">>>>>>>>>>>>" , $ , $('#usermodal'));
        this.router.navigate(['/']);
         $("#usermodal").modal('hide');
      }
    },(error)=>{
      console.log("error from login api" , error)
    })
  }

  ngOnInit() {
  }

}
