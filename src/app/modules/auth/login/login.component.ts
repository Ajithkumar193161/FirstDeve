import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SessionmanagementService } from 'src/app/shared/statemanagement/sessionmanagement.service';
import { HttpClient } from  '@angular/common/http';

interface user {  
  id: Number;  
  User: String;  
  Password: String; 
}  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})

export class LoginComponent implements OnInit{
  public inputtype:string ='password';
  public mygroup: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  products: any = [];
  username: any;
  posts: any;
  constructor(
    private ROUTER: Router,
    private httpService: HttpClient,
    private toastr: ToastrService,
    private SESSIONSTORE: SessionmanagementService,
  ){
  }
  ngOnInit(): void {
  }
 
login(){
  debugger
    if(this.mygroup.value.username === '' || this.mygroup.value.username === null){
      this.toastr.error('Please Enter User Name');
    }
    else if(this.mygroup.value.username === '' || this.mygroup.value.password === null){
      this.toastr.error('Please Enter Password');
    }
    const url : string= 'assets/userdata/user.json'
    this.httpService.get(url).subscribe((res:any)=>{
      console.log(res)
     const user= res.find(((a:any)=>{
      return a.User === this.mygroup.value.username && a.Password ===this.mygroup.value.password
     })
     )
     if(user){
      this.SESSIONSTORE.setUsername(user.User);
      this.SESSIONSTORE.setMailid(user.MailID);
      this.ROUTER.navigateByUrl('/Groceris');
     }
     else {
      this.toastr.error('User not available');
     }
    },err=>{
      this.toastr.error('Something Went Wrong');
    })
}
public show(event:any):void{
if(event.target.checked){
  this.inputtype='text'
}
else{
  this.inputtype='password'
}
}

}
