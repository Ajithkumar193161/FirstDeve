import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
export interface PeriodicElement {
  name: string;
  position: number;
  gender: number;
  Status: string;
  Progress: string;
}
@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.scss'],
  
})
export class CompoComponent implements OnInit {
  activestatus: any;
  constructor( 
    private httpService: HttpClient,
    private toastr: ToastrService, private cdr: ChangeDetectorRef){
    
  }
  displayedColumns: string[] = ['name', 'weight', 'symbol','progress'];
  dataSource :any;
  name:any;
  gender:any;
  DOB:Date | undefined
  Status:boolean = false;
  value:number = 0;
  players:any ={  
    "Name": "",  
    "Gender": ""  ,
    "Status":"",
    "Progress":""
  }
  nameDetails = [
    {"name":"Ajith","mobile":'9002909764',"address":'Viruthunagar'}, 
    {"name":"Asdfg","mobile":'1234567890',"address":'Chennai'}, 
    {"name":"Lkanj","mobile":'0987654321',"address":''}
  ]
  ngOnInit(){
    const url : string= 'assets/userdata/playersdata.json'
    this.httpService.get(url).subscribe((res:any)=>{
      console.log(res)
      this.dataSource=res

    },err=>{
      this.toastr.error('Something Went Wrong');
    })
  }

  submit(){
    if(this.Status == true){
      this.activestatus = 'Active'
    }
    else if(this.Status == false){
      this.activestatus ='Inactive'
    }
    if(this.name == '' || this.name == null){
      this.toastr.error('Please enter name')
    }
    else if(this.gender == '' || this.gender == null){
      this.toastr.error('Please enter gender')
    }
    else if(this.DOB == null){
      this.toastr.error('Please enter DOB')
    }
    else{
      const user = { 
        Name: this.name,  
        Gender: this.gender ,
        Status: this.activestatus,
        Progress: this.value
     };
     this.dataSource.push(user)
     this.dataSource= [...this.dataSource];
    }

  }
  clear(){
     this.name = '',  
    this.gender ='',
     this.Status = false,
     this.value =0
  }
}
