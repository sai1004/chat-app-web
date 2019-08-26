import { Component, OnInit } from '@angular/core';
import { sanitizeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-users-chat-list',
  templateUrl: './users-chat-list.component.html',
  styleUrls: ['./users-chat-list.component.css']
})
export class UsersChatListComponent implements OnInit {


  users = [
    { 
      id: 1,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'
      
    },
    { 
      id: 2,
      userName: 'sam', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'jake', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'ram', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }
    ,
    { 
      id: 2,
      userName: 'chris', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'lark', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'lin', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    },
    { 
      id: 2,
      userName: 'brad', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'jason', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'hammer', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    },
    { 
      id: 2,
      userName: 'sevlit', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'roy', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'Rathor', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    },
    { 
      id: 2,
      userName: 'emrin', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'jospeh', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'dildigo', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
