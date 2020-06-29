import { Component, OnInit } from '@angular/core';
import {Users} from "../../models/users";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public title:string;
  public user: Users;

  constructor() {
    this.title = 'Sign in';
    this.user = new Users(1, '', '', 'ROLE_USER', '', '', '')

  }

  /*    public id: number,
    public name: string,
    public surname: string,
    public role: string,
    public email:string,
    public password: string,
    public phoneNumber: string */


  ngOnInit(): void {
    console.log('Componente sign in working');
  }

}
