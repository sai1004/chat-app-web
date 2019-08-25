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
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }
    ,
    { 
      id: 2,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    },
    { 
      id: 2,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    },
    { 
      id: 2,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    },
    { 
      id: 2,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 3,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }, { 
      id: 4,
      userName: 'sai', 
      message: ' somthing ',
      img: '../../../assets/avatar2.png'

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
