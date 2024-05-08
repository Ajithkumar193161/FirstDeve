import { OnInit } from '@angular/core';
import { Component,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
constructor(private ROUTER: Router,){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Output() close = new EventEmitter<void>();

  links = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    // Add more links as needed
  ];
  dummy(){

  this.ROUTER.navigateByUrl('/Groceris/list/compo');
  }
}
