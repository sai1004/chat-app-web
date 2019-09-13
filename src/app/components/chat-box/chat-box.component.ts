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
      message: ' im sai ',
      img: '../../../assets/avatar2.png'
      
    },
    { 
      id: 2,
      userName: 'sam', 
      message: ' i"m sam  ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'jake', 
      message: ' i"m jake ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'ram', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }
    // ,
    // { 
    //   id: 2,
    //   userName: 'chris', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // }, { 
    //   id: 3,
    //   userName: 'lark', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // }, { 
    //   id: 4,
    //   userName: 'lin', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // },
    // { 
    //   id: 2,
    //   userName: 'brad', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // }, { 
    //   id: 3,
    //   userName: 'jason', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // }, { 
    //   id: 4,
    //   userName: 'hammer', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // },
    // { 
    //   id: 2,
    //   userName: 'sevlit', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // }, { 
    //   id: 3,
    //   userName: 'roy', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // }, { 
    //   id: 4,
    //   userName: 'Rathor', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // },
    // { 
    //   id: 2,
    //   userName: 'emrin', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // }, { 
    //   id: 3,
    //   userName: 'jospeh', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // }, { 
    //   id: 4,
    //   userName: 'dildigo', 
    //   message: ' somthing ',
    //   img: '../../../assets/avatar2.png'

    // }
  ]
  constructor() { }

  ngOnInit() {
  }

}
