import { Routes } from '@angular/router';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { StudentsComponent } from './components/routing/students/students.component';
import { StudentDetailsComponent } from './components/routing/student-details/student-details.component';
import { ProfileComponent } from './components/routing/profile/profile.component';
import { ErrorComponent } from './components/routing/error/error.component';


export const routes: Routes = [
  {path:"", component:RegisterStudentComponent},
  {path:"students", component:StudentsComponent},
  {path:"students/:id", component:StudentDetailsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"**", component:ErrorComponent}
];
