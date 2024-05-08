import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SessionmanagementService } from 'src/app/shared/statemanagement/sessionmanagement.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  username: any;
  selfLayout = 'default';
  username1: any;
  display:boolean= false;
  display1:boolean= false;
  emailid: any;
  constructor(
    private SESSION: SessionmanagementService,
    private ROUTER : Router
  ){}
  ngOnInit(): void {
    debugger
    const user =this.SESSION.getUsername()
    this.username =this.SESSION.getUsername()
    this.emailid =this.SESSION.getMailid()
    this.username1 = user[0]
  }
  links = [
    { label: 'Home', route: '/Groceris/list/compo',icon:'fa-solid fa-cart-shopping' },
    { label: 'About', route: '/Groceris/list/compo',icon:'fa-solid fa-warning' },
    // Add more links as needed
  ];
  menu(li:string){
    debugger
    this.ROUTER.navigateByUrl(li);
    this.display=false
  }

  sidemenu(){
    this.display=true
    this.display1=false
  }
  userdetail(){
    this.display=false
    this.display1=true
  }

}
