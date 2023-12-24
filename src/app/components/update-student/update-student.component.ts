import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from '../../Services/demo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers:[DemoService],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})

export class UpdateStudentComponent {
  ID:any;
  oneStudent:any;
  constructor(private myService:DemoService ,myActivated:ActivatedRoute, private router:Router){
    this.ID = myActivated.snapshot.params["id"];
    // console.log(this.ID);
  }
  ngOnInit(): void {
    this.myService.getStudentByID(this.ID).subscribe({
      next:(data)=>{
        // console.log(data)
        this.oneStudent = data;
      },
      error:()=>{console.log("7asal Error")}
    })
  }
  
  UpdateStudent(name:string, age:string, email:string, phone:string){
    let updatedStudent = {name, age, email, phone};
    this.myService.UpdateStudent(this.ID,updatedStudent).subscribe(
      {
        complete:()=>{
          this.router.navigate(['/students']);
        }
      }
    );
  } 
}


/*
constructor(private myService:DemoService, private router:Router){}

    AddStudent(name:string, age:string, email:string, phone:string){
      let newStudent = {name, age, email, phone};
      this.myService.AddNewStudent(newStudent).subscribe(
        {
          complete:()=>{
            this.router.navigate(['/students']);
          }
        }
      );
  }

  */