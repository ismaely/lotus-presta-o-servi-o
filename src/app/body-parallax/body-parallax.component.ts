import { Component, OnInit } from '@angular/core';
//import $ from "jquery";

@Component({
  selector: 'app-body-parallax',
  templateUrl: './body-parallax.component.html',
  styleUrls: ['./body-parallax.component.css']
})
export class BodyParallaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.runParallax();
  }


  runParallax(){
   // $('.parallax').parallax();
  }
}
