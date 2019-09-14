import {Component} from "@angular/core"
import {CommonService} from "../common.service"
import {HttpClient} from "@angular/common/http"

var signupurl = "https://ashuapi.herokuapp.com/api/register"

@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html'
})
export class SignupComponent{
    constructor(private cs1 :CommonService ,private http:HttpClient){}
    showError = false;
    loggedinusers
    user = {
        name:"Dummy USer",
        email:"test@test.com",
        password:"test"
    }
    showLoggedinUsers(){
         console.log("common service" , this.cs1)
         this.loggedinusers = this.cs1.count;
    }
    register(){
       this.http.post(signupurl,this.user).subscribe((response)=>{
           console.log("response from signup api", response)
       },(error)=>{
           console.log("error from signup api" , error)
       })
    }





}