import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DemoService } from '../../Services/demo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-student',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers:[DemoService],
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent {
  ID:any;


  constructor(private myService:DemoService ,myActivated:ActivatedRoute, private router:Router){
    this.ID = myActivated.snapshot.params["id"];
  
    // console.log(this.ID);
  }

  DeleteStudent(){
    this.myService.DeleteStudent(this.ID).subscribe(
      {        
        complete:()=>{
          this.router.navigate(['/students']);
        }
      }
    );
  } 
}
