import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  Router, RouterModule } from '@angular/router';
import { DemoService } from '../../Services/demo.service';
import { compileNgModule } from '@angular/compiler';

  @Component({
    selector: 'app-students',
    standalone: true,
    imports: [HttpClientModule, RouterModule],
    providers:[DemoService],
    templateUrl: './students.component.html',
    styleUrl: './students.component.css'
  })
  export class StudentsComponent implements OnInit{  
    
    constructor(private myService:DemoService, private router:Router){}
    AllStudents:any;


    ngOnInit(): void {
      // console.log(this.myService.getAllStudents())//.toPromise().then((data)=>{}).catch((err)=>{})
      // this.myService.getAllStudents().subscribe(
      //     (data)=>{console.log(data)},
      //     ()=>{console.log("7asal Error")}
      //   )
      this.myService.getAllStudents().subscribe({
        next:(data)=>{
          // console.log(data)
          this.AllStudents = data;
        },
        error:()=>{console.log("7asal Error")}
      })
    }

    DeleteStudent(id:number){
      console.log(id);
      this.myService.DeleteStudent(id).subscribe(


        {        
          complete:()=>{
            // this.router.navigate(['/students']);
            this.myService.getAllStudents().subscribe({
              next:(data)=>{
                // console.log(data)
                this.AllStudents = data;
              },
              error:()=>{console.log("7asal Error")}
            })
          }
        }
      );
    }
  }
