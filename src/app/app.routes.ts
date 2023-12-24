import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { ErrorComponent } from './components/error/error.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';

export const routes: Routes = [
  {path:"", component:StudentsComponent},
  {path:"students", component:StudentsComponent},
  {path:"students/:id", component:StudentDetailsComponent},
  {path:"updatestudent/:id", component:UpdateStudentComponent},
  {path:"deletestudent/:id", component:DeleteStudentComponent},
  {path:"newstudent", component:NewStudentComponent},
  {path:"**", component:ErrorComponent}
];


