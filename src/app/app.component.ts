import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bell';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyArvmZP5HJkHTTk3incOf8rKwvWScypcZY",
      authDomain: "bell-d9444.firebaseapp.com",
    });
  }
}
