import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css',
})
export class RegisterStudentComponent {
  userName: string = '';
  userAge: string = '';
  
  get AgeValid(){
    return +this.userAge>=20 && +this.userAge<=30
  }
  get NameValid() {
    return this.userName.length >=3;

  }

  @Output() myEvent = new EventEmitter();

  FireNow() {
    if(this.AgeValid && this.NameValid)
    this.myEvent.emit({ name: this.userName, age: this.userAge });
  }
}
