import { Component, OnInit, Input } from '@angular/core';
import { Props } from 'src/app/constants/props';
import { Profile } from 'src/app/entities/Profile';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  Props: Props = Props;
  hide: boolean = true;
  mobileErrMsg: string = "Mobile number required";
  emailErrMsg: string = "Email required";
  @Input()
  profile: Profile;

  @Input()
  type: string;


  constructor() { }

  ngOnInit() {
  }

}
