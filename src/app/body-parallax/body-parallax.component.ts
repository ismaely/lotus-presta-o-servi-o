import { Component, OnInit } from '@angular/core';
import $ from "jquery";
//import {MatIconModule} from '@angular/material/icon';
//import { IconImportModule } from 'mat-icon-import';

@Component({
  selector: 'app-body-parallax',
  templateUrl: './body-parallax.component.html',
  styleUrls: ['./body-parallax.component.css']
})
export class BodyParallaxComponent implements OnInit {

  paralax: any;
  parallax: any;
  constructor() { 
    //this.paralax = document.querySelector('.paralax');
  }

  ngOnInit(): void {
    //this.paralax = document.querySelector('.parallax');
    this.runParallax();
   
  }


  runParallax(){

   
    
  }
}
