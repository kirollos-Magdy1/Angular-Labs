import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DemoService } from '../../Services/demo.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers:[DemoService],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  ID:any;
  oneStudent:any;
  constructor(private myService:DemoService ,myActivated:ActivatedRoute){
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
}
