import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Params, Router} from '@angular/router';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {

  senderIndex: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.senderIndex = +params['id'];
      }
    );
  }

}
