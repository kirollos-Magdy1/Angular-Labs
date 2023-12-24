import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DemoService } from '../../Services/demo.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers:[DemoService],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  constructor(private myService:DemoService){}

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
}
