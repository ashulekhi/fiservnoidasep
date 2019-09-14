import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service"
import {HttpClient} from "@angular/common/http"
import {ActivatedRoute} from "@angular/router"

declare var $ : any
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  productid
  product
  constructor(private route : ActivatedRoute, private cs :  CommonService , private http:HttpClient) { 
    console.log("route details" , this.route.snapshot)
    this.productid = this.route.snapshot.params.id
  }

  addToCart(){
    if(!localStorage.email){
      alert()
      $('#usermodal').modal('show')
    }
  }

  ngOnInit() {
    let productapi = "https://ashuapi.herokuapp.com/api/product/"+this.productid
    this.http.get(productapi).subscribe((response)=>{
      console.log("response from product api" , response)
      this.product = response["data"]
    },
  (error)=>{
    console.log("error from product api" , error)
  })
  }

}
