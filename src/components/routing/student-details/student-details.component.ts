import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  ID:number=0;
  constructor(myActivated:ActivatedRoute){
    // console.log(myActivated.snapshot.params["id"]);
    this.ID = myActivated.snapshot.params["id"]
  }
}
