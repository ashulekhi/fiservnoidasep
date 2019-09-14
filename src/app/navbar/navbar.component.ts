import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloggedin
  ngDoCheck(){
    this.isloggedin = localStorage.email
  }

  logout(){
    localStorage.clear()
  }

  // constructor() { 
  //   console.log("this inside constructor" , this)
  //   setTimeout(()=>{
  //     console.log("this inside timeout" , this);
  //   } , 5000)
  // }

  ngOnInit() {
  }

}
