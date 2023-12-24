import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
  {path:"", component:StudentsComponent},
  {path:"students", component:StudentsComponent},
  {path:"students/:id", component:StudentDetailsComponent},
  {path:"newstudent", component:NewStudentComponent},
  {path:"**", component:ErrorComponent}
];
