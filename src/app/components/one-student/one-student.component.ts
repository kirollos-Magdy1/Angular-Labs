import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DemoService } from '../../Services/demo.service';
import { CustomDirective } from '../../Directives/custom.directive';
import { CustomPipe } from '../../Pipes/custom.pipe';

@Component({
  selector: 'app-one-student',
  standalone: true,
  imports: [RouterModule,  CustomPipe],
  templateUrl: './one-student.component.html',
  styleUrl: './one-student.component.css'
})
export class OneStudentComponent {
  
    
  constructor(private myService:DemoService, private router:Router){
    console.log(this.oneStd);

  }
  
  @Input() oneStd: any
  @Output() deleteStudentEvent  = new EventEmitter();
  
  
  ngOnInit(): void {
    console.log(this.oneStd);
  }
  
  DeleteStudent(id:number){
    console.log(id);
    this.myService.DeleteStudent(id).subscribe(

      {        
        complete:()=>{
          // this.router.navigate(['/students']);
          this.myService.getAllStudents().subscribe({
            next:(data)=>{              
              this.deleteStudentEvent.emit(data)
              
            },
            error:()=>{console.log("7asal Error")}
          })
        }
      }
    );
  }
}
