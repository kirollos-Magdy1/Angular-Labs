import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  Router, RouterModule } from '@angular/router';
import { DemoService } from '../../Services/demo.service';
import { OneStudentComponent } from '../one-student/one-student.component';
import { CommonModule } from '@angular/common';
import { CustomDirective } from '../../Directives/custom.directive';

  @Component({
    selector: 'app-students',
    standalone: true,
    imports: [HttpClientModule, RouterModule, OneStudentComponent, CommonModule, CustomDirective],
    providers:[DemoService],
    templateUrl: './students.component.html',
    styleUrl: './students.component.css'
  })
  export class StudentsComponent implements OnInit{  
    
    constructor(private myService:DemoService, private router:Router){}
    AllStudents:any;

    updateStudents(newStds:any) {
      this.AllStudents = newStds;
    }

    ngOnInit(): void {      
      this.myService.getAllStudents().subscribe({
        next:(data)=>{
          // console.log(data)
          this.AllStudents = data;
          console.log(data)
        },
        error:()=>{console.log("7asal Error")}
      })
    }
    
    onDeleteStudent(newStds: any) {
      this.AllStudents = newStds;      
  }
}

    // DeleteStudent(id:number){
    //   console.log(id);
    //   this.myService.DeleteStudent(id).subscribe(


    //     {        
    //       complete:()=>{
    //         // this.router.navigate(['/students']);
    //         this.myService.getAllStudents().subscribe({
    //           next:(data)=>{
    //             // console.log(data)
    //             this.AllStudents = data;
    //           },
    //           error:()=>{console.log("7asal Error")}
    //         })
    //       }
    //     }
    //   );
    // }
