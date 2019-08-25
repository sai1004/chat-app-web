import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  users = [
    { 
      id: 1,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'
      
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
