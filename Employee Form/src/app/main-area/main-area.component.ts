import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit 
{
  constructor(){}
  employeeModel=new Employee("",0,"",0,"",0);
  onSubmit(value:any){
    alert("Employee Details Submitted Successfully.\n****Submitted Details****\n"
    +"Employee Name : "+this.employeeModel.employeeName
    +"\nEmail Address : "+this.employeeModel.email
    +"\nEmployee Age : "+this.employeeModel.age
    +"\nEmployee Salary : "+this.employeeModel.salary
    +"\nPan Number : "+this.employeeModel.panNumber
    +"\nAadhar Number : "+this.employeeModel.aadharNumber
    +"\n****Thank You!****");

   console.log(value);
   location.reload();
  }
  
  ngOnInit(): void {
  }
 
}
