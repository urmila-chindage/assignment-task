import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-newjoinee',
  templateUrl: './newjoinee.component.html',
  styleUrls: ['./newjoinee.component.css']
})
export class NewjoineeComponent implements OnInit {

    public employee:any=[];
     responsiveOptions;

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
