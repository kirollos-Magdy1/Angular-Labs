import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  Students: { name: string; age: string }[] = [];

  @Input({ required: true, alias: 'NewStdProp' })
  StudentsArr:{name:string,age:string}[]= [];

}




  // AddNewStudent = (params:any) =>{
    // this.Students.push(newStudent);
  // }