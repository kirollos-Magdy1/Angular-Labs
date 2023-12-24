import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from '../../Services/demo.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  standalone: true,
  imports: [HttpClientModule],
  providers:[DemoService],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.css'
})
export class NewStudentComponent  {
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
}
