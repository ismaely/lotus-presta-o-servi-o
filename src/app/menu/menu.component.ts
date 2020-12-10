import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const el = document.getElementById('mobile-demo');
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  console.log(document.getElementById('mobile-demo'));
  console.log($(".sidenav"));
  
  
  }


  sidenav() {
    $(".sidenav").sidenav();
  }
}
