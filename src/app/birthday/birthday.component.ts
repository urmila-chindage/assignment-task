import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Iemployee } from '../interface/iemployee'

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

     public employee:any=[];
     responsiveOptions;
     status:boolean=true;
     

     thisweek(){
      console.log("clicked");
      this.status = !this.status;
      var today = new Date();
      //var nextweek = new Date(today.getDate());
      console.log(today)
      return today;
      
   }
  constructor(private employeeservice:EmployeeService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
    
  }

  ngOnInit(): void {
    this.employeeservice.getdata().subscribe(
      (data)=>{
        this.employee=data
      }
    )
  }

}
