import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  
  public employee:any=[];
  firstname:any;
  department:any;
  empid:any;
  designation:any

  p:number = 1;
  collection = [];
  start:any;
  last:any;
  constructor(private employeeservice:EmployeeService) {}

  ngOnInit(): void {

    this.employeeservice.getdata().subscribe(
      (data)=>{
        this.employee=data
      }
    )
  }
  listCount(count:any) {
    this.start = count
    this.start = this.start * 10 - 9
    this.last = count * 10
    
    console.log('start'+ '      '+this.start + '      '+'last' + '      '+ this.last);
  }
 

  SearchName(){
    if(this.firstname==""){
      this.ngOnInit();
    }
    else{
      this.employee = this.employee.filter((res:any)=>{
        return res.name.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
    }
  }

  SearchDept(){
    if(this.department==""){
      this.ngOnInit();
    }
    else{
      this.employee = this.employee.filter((res:any)=>{
        return res.dept.toLocaleLowerCase().match(this.department.toLocaleLowerCase());
      })
    }
  }

  SearchId(){
    if(this.empid==""){
      this.ngOnInit();
    }
    else{
      this.employee = this.employee.filter((res:any)=>{
        return res.id.toLocaleLowerCase().match(this.empid.toLocaleLowerCase());
      })
    }
  }

  SearchDesignation(){
    if(this.designation==""){
      this.ngOnInit();
    }
    else{
      this.employee = this.employee.filter((res:any)=>{
        return res.designation.toLocaleLowerCase().match(this.designation.toLocaleLowerCase());
      })
    }
  } 

  /*filterSearching() {
    console.log("clicked")
    this.employee = this.employee.filter((res:any) => (res['name'] == this.firstname)|| 
    (res['dept'] == this.department) ||(res['id'] == this.empid) || 
    (res['designation'] == this.designation));  
   }*/

  key='id';
  reverse:boolean = false;
  sort(key:any){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
