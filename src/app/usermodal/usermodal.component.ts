import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermodal',
  templateUrl: './usermodal.component.html',
  styleUrls: ['./usermodal.component.css']
})
export class UsermodalComponent implements OnInit {

 toggleView = true

  changeView(){
    this.toggleView = !this.toggleView
  }
  constructor() { }

  ngOnInit() {
  }

}
