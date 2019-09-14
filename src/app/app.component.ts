import {Component} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {CommonService} from "./common.service"

var productsapi = "https://ashuapi.herokuapp.com/api/allproducts"
@Component({
  selector:"app-root",
  templateUrl:"./app.component.html"
})
export class AppComponent{

  getData(data){
    console.log("child has passed" , data)
  }


  constructor(private http :  HttpClient , private cs: CommonService){
  if(!this.cs.products){
    this.http.get(productsapi).subscribe((response)=>{
      this.products = response["data"]; 
      this.cs.products = response["data"]
    },(error)=>{
      console.log("error from products api" , error)
    })
  }
  else{
    this.products = this.cs.products
  }
  }
  products = []
}


