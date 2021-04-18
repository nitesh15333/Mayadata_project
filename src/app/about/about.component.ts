import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  mydata={
    "Name":"Nitesh Shaw",
    "Roll":1805404,
    "Github":"github.com/nitesh15333",
    "Skills":"Javascript, Html,Css,Angular",
    "Some":"Android bases employee management app,covid 19 cases prediction using machine learning,invoice due date pridiction using machine learning,cricket fantacy game using by python certified by intershala,Home automation system using adruino"
  }
  constructor() { }

  ngOnInit() {
  }

}
