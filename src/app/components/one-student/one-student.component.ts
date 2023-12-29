import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DemoService } from '../../Services/demo.service';

@Component({
  selector: 'app-one-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './one-student.component.html',
  styleUrl: './one-student.component.css'
})
export class OneStudentComponent {
  
    
  constructor(private myService:DemoService, private router:Router){}
  
  @Input() oneStd:any;

  DeleteStudent(id:number){
    console.log(id);
    this.myService.DeleteStudent(id).subscribe(


      {        
        // complete:()=>{
        //   // this.router.navigate(['/students']);
        //   this.myService.getAllStudents().subscribe({
        //     next:(data)=>{
        //       // console.log(data)
        //       this.AllStudents = data;
        //     },
        //     error:()=>{console.log("7asal Error")}
        //   })
        // }
      }
    );
  }
}
