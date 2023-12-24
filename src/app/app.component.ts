import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StudentsComponent } from './components/students/students.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, HeaderComponent, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  Students: { name: string; age: string }[] = [];


  getData(newStudent: { name: string, age: string }) {
    console.log('get data (parent)');
    console.log(newStudent.name);
    this.Students.push(newStudent);
  }
}
