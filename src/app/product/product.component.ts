import { Component, OnInit , Output,Input ,  EventEmitter} from '@angular/core';
import {CommonService} from "../common.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product 
  constructor(private cs : CommonService , private router : Router) {
   
   }

   

  showProduct(){
    this.cs.productid = this.product.productid
    this.router.navigate(['/product/'+this.product.productid])
  }

  @Output() getdata = new EventEmitter()

  view(){
   this.getdata.emit("Iphonex")
   console.log("event emitted");
  }
 
 

  ngOnInit() {
  }

}
